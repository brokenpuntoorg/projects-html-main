// ======================================
// JS para el Carrito (MODO MULTI-PRODUCTO)
// ======================================

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartSidebar = document.getElementById('cart-sidebar');
const cartCountElement = document.getElementById('cart-count');
const cartListElement = document.getElementById('cart-list');
const cartTotalElement = document.getElementById('cart-total');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const cartTaxElement = document.getElementById('cart-tax');
const checkoutBtn = document.querySelector('.checkout-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');

const IVA_RATE = 0.16;
// Mantenemos el modo multi-producto
const SINGLE_PRODUCT_MODE = false; 

// --------------------------------------
// CONTROL DE SIDEBAR
// --------------------------------------

function openCart() {
    if (cartSidebar) {
        cartSidebar.classList.add('is-open'); 
    }
}

function closeCart() {
    if (cartSidebar) {
        cartSidebar.classList.remove('is-open');
    }
}

// --------------------------------------
// LÓGICA DE PRODUCTOS (Agregar, Eliminar, Vaciar)
// --------------------------------------

/**
 * Elimina completamente un ítem (todas sus cantidades) del carrito.
 * @param {string} productId - ID del producto a eliminar.
 */
function removeItem(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCart();
}

/**
 * Vacía completamente el carrito (Asociado al botón negro "Vaciar").
 */
function clearCart() {
    if (confirm("¿Estás seguro de que quieres vaciar todo el carrito?")) {
        cartItems = [];
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCart();
    }
}


/**
 * Agrega un producto o incrementa su cantidad si ya existe.
 * @param {Object} productData - Datos del producto a agregar.
 */
function addItemToCart(productData) {
    let existingItem = cartItems.find(item => item.id === productData.id);

    if (existingItem) {
        // Si ya existe, incrementamos la cantidad
        existingItem.quantity += 1;
    } else {
        // Si es nuevo, lo agregamos con cantidad 1
        productData.quantity = 1; 
        cartItems.push(productData);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    renderCart();
    openCart();
}

/**
 * Actualiza la cantidad de un ítem.
 */
function updateQuantity(productId, newQuantity) {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
        const quantity = Math.max(1, parseInt(newQuantity));
        item.quantity = quantity;

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCart();
    }
}

// --------------------------------------
// RENDERIZADO Y CÁLCULO DE TOTALES
// --------------------------------------

function updateTotals() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * IVA_RATE;
    const total = subtotal + tax;
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    if (cartSubtotalElement) cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (cartTaxElement) cartTaxElement.textContent = `$${tax.toFixed(2)}`;
    if (cartTotalElement) cartTotalElement.textContent = `$${total.toFixed(2)}`;
    if (cartCountElement) cartCountElement.textContent = count;
    
    // Control de botones
    const isEmpty = cartItems.length === 0;
    if (checkoutBtn) checkoutBtn.disabled = isEmpty;
    if (clearCartBtn) clearCartBtn.disabled = isEmpty; 
}

function renderCart() {
    if (!cartListElement) return;

    cartListElement.innerHTML = ''; 
    
    if (cartItems.length === 0) {
        cartListElement.innerHTML = '<p class="empty-cart-message">El carrito está vacío.</p>';
    } else {
        cartItems.forEach(item => {
            const totalItemPrice = (item.price * item.quantity).toFixed(2);

            const li = document.createElement('li');
            li.className = 'cart-item';
            li.setAttribute('data-id', item.id);

            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <div class="cart-item-controls">
                        <input type="number" class="item-quantity-input" value="${item.quantity}" min="1" data-id="${item.id}" aria-label="Cantidad">
                        <button class="remove-item-btn" data-id="${item.id}" data-action="remove" aria-label="Eliminar ítem">
                            <i class="fas fa-trash-alt"></i>  </button>
                    </div>
                </div>
                <p class="cart-item-price-total">$${totalItemPrice}</p>
            `;
            cartListElement.appendChild(li);
        });
    }

    updateTotals();
    initCartControls(); 
}

// --------------------------------------
// INICIALIZACIÓN DE LISTENERS
// --------------------------------------

function initProductButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productData = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: parseFloat(button.dataset.price),
                image: button.dataset.image,
                attributes: button.dataset.attrs,
                url: button.dataset.url 
            };
            
            addItemToCart(productData);
        });
    });
}

function initCartControls() {
    // 1. Eliminar Producto (Ícono de Papelera)
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.id;
            removeItem(productId);
        });
    });

    // 2. Cambiar Cantidad
    document.querySelectorAll('.item-quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const productId = input.dataset.id;
            updateQuantity(productId, e.target.value);
        });
    });
}


// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Botones para abrir/cerrar el carrito
    document.querySelectorAll('.close-cart-btn, .cart-overlay').forEach(btn => {
        btn.addEventListener('click', closeCart);
    });

    // LISTENER: Botón Vaciar Carrito 
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    renderCart(); 
    initProductButtons(); 
});
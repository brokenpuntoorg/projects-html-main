document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-options-form-unique');
    const altoSelect = document.getElementById('alto-unique');
    const anchoSelect = document.getElementById('ancho-unique');
    const cantidadInput = document.getElementById('cantidad-unique');
    const datosSelloTextarea = document.getElementById('datos-sello-unique');
    const charCountSpan = document.querySelector('.char-count-unique');
    const priceDisplay = document.getElementById('current-price-unique');
    
    // El precio base se obtiene del HTML (simulado por PHP)
    const BASE_PRICE = 75.00; 

    // --- 1. Lógica de Cálculo de Precio ---
    const updatePrice = () => {
        let modifierAlto = 0;
        let modifierAncho = 0;
        let finalPrice = BASE_PRICE;
        let quantity = parseInt(cantidadInput.value) || 1;

        // Obtener modificador de Alto
        const selectedAltoOption = altoSelect.options[altoSelect.selectedIndex];
        if (selectedAltoOption && selectedAltoOption.dataset.priceModifier) {
            modifierAlto = parseFloat(selectedAltoOption.dataset.priceModifier);
        }

        // Obtener modificador de Ancho
        const selectedAnchoOption = anchoSelect.options[anchoSelect.selectedIndex];
        if (selectedAnchoOption && selectedAnchoOption.dataset.priceModifier) {
            modifierAncho = parseFloat(selectedAnchoOption.dataset.priceModifier);
        }

        // Calcular precio final (Precio Base + Modificadores) * Cantidad
        finalPrice = (BASE_PRICE + modifierAlto + modifierAncho) * quantity;

        // Actualizar el display del precio
        priceDisplay.textContent = `$${finalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`; // Formato con coma
    };

    // --- 2. Lógica del Contador de Caracteres ---
    const updateCharCount = () => {
        const currentLength = datosSelloTextarea.value.length;
        const maxLength = datosSelloTextarea.maxLength;
        charCountSpan.textContent = `${currentLength}/${maxLength}`;
    };
    
    // --- 3. Manejadores de Eventos ---
    
    // Cambios en Altura, Ancho y Cantidad
    altoSelect.addEventListener('change', updatePrice);
    anchoSelect.addEventListener('change', updatePrice);
    cantidadInput.addEventListener('change', updatePrice);
    cantidadInput.addEventListener('input', updatePrice);
    
    // Cambios en el área de texto
    datosSelloTextarea.addEventListener('input', updateCharCount);

    // Envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validación básica de que las opciones principales estén seleccionadas
        if (!altoSelect.value || !anchoSelect.value) {
            alert('Por favor, selecciona las opciones de Alto y Ancho antes de agregar al carrito.');
            return;
        }

        const formData = {
            name: document.querySelector('.product-name-unique').textContent.trim(),
            alto: altoSelect.value,
            ancho: anchoSelect.value,
            cantidad: cantidadInput.value,
            datos: datosSelloTextarea.value,
            precio_unitario: (parseFloat(priceDisplay.textContent.replace('$', '').replace(',', '')) / parseInt(cantidadInput.value)).toFixed(2)
        };
        
        console.log('Producto agregado al carrito:', formData);
        alert(`¡"${formData.name}" (Alto: ${formData.alto}, Cant: ${formData.cantidad}) agregado al carrito!`);
        
        // Aquí iría la llamada AJAX para agregar el producto al carrito de la tienda.
    });

    // Inicialización al cargar la página
    updatePrice();
    updateCharCount();
});
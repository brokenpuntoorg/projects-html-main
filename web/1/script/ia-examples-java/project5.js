document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    // Función para abrir el menú móvil
    function openMobileMenu() {
        mobileMenu.classList.add('open');
        body.classList.add('menu-open');
    }

    // Función para cerrar el menú móvil
    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        body.classList.remove('menu-open');
    }

    // Toggle para el menú de hamburguesa (abrir)
    hamburger.addEventListener('click', openMobileMenu);

    // Botón para cerrar el menú
    closeBtn.addEventListener('click', closeMobileMenu);

    // Cierra el menú al hacer clic fuera de él
    body.addEventListener('click', (e) => {
        if (body.classList.contains('menu-open') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Toggle para los submenús en el menú móvil
    const submenuToggles = document.querySelectorAll('.has-submenu-mobile > a');

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que el enlace navegue

            const submenu = toggle.nextElementSibling;
            
            // Cierra otros submenús abiertos
            document.querySelectorAll('.submenu-mobile.open').forEach(item => {
                if (item !== submenu) {
                    item.classList.remove('open');
                    const icon = item.previousElementSibling.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                }
            });

            // Alterna la visibilidad del submenú actual
            submenu.classList.toggle('open');
            
            // Alterna la rotación del ícono de flecha
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.style.transform = submenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Código anterior del menú de hamburguesa...

    // Lógica para el modal de disponibilidad de productos
    const modal = document.getElementById('rolling-capacity-modal');
    const imageTrigger = document.getElementById('product-image-trigger');
    const closeBtn = document.querySelector('.close-modal-btn');
    const body = document.body;

    // Datos modulares para la capacidad
    const rollingData = {
        item1: { date: '08/05/2019', lbs: '132,486 lbs.' },
        item2: { date: '08/19/2019', lbs: '106,000 lbs.' }
    };

    function updateModalContent() {
        modal.querySelector('.modal-body .capacity-item:nth-child(1) .date').textContent = rollingData.item1.date;
        modal.querySelector('.modal-body .capacity-item:nth-child(1) .capacity').textContent = rollingData.item1.lbs;
        
        modal.querySelector('.modal-body .capacity-item:nth-child(2) .date').textContent = rollingData.item2.date;
        modal.querySelector('.modal-body .capacity-item:nth-child(2) .capacity').textContent = rollingData.item2.lbs;
    }

    function showModal() {
        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    // Llama a la función para cargar los datos inicialmente
    updateModalContent();

    // Eventos para mostrar/ocultar el modal dependiendo del dispositivo
    function setupModalEvents() {
        if (window.innerWidth >= 768) { // Escritorio (mouseover)
            imageTrigger.addEventListener('mouseover', showModal);
            imageTrigger.addEventListener('mouseleave', hideModal);
            modal.addEventListener('mouseover', showModal);
            modal.addEventListener('mouseleave', hideModal);
        } else { // Móvil (click)
            imageTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                showModal();
            });
            // Ocultar el modal al hacer clic en el botón de cierre
            closeBtn.addEventListener('click', hideModal);
        }
    }

    // Inicializa los eventos
    setupModalEvents();

    // Vuelve a configurar los eventos si cambia el tamaño de la pantalla
    window.addEventListener('resize', () => {
        // Remueve todos los listeners para evitar duplicidad
        imageTrigger.removeEventListener('mouseover', showModal);
        imageTrigger.removeEventListener('mouseleave', hideModal);
        modal.removeEventListener('mouseover', showModal);
        modal.removeEventListener('mouseleave', hideModal);
        imageTrigger.removeEventListener('click', showModal);
        closeBtn.removeEventListener('click', hideModal);

        // Vuelve a configurar
        setupModalEvents();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén el código de las secciones anteriores aquí) ...

    // Lógica para el modal de favoritos
    const favoritesModal = document.getElementById('favorites-modal');
    const favoritesImageTrigger = document.getElementById('favorites-image-trigger');
    const closeFavoritesBtn = document.querySelector('.close-favorites-btn');

    // Función para mostrar el modal de favoritos
    function showFavoritesModal() {
        favoritesModal.style.display = 'block';
    }

    // Función para ocultar el modal de favoritos
    function hideFavoritesModal() {
        favoritesModal.style.display = 'none';
    }

    // Configuración de eventos según el tamaño de la pantalla
    function setupFavoritesModalEvents() {
        if (window.innerWidth >= 768) { // Escritorio (mouseover)
            // Asegurarse de que los eventos de clic no estén activos
            favoritesImageTrigger.removeEventListener('click', showFavoritesModal);
            closeFavoritesBtn.removeEventListener('click', hideFavoritesModal);

            // Eventos de mouseover para mostrar y ocultar el modal
            favoritesImageTrigger.addEventListener('mouseover', showFavoritesModal);
            favoritesImageTrigger.addEventListener('mouseleave', hideFavoritesModal);
            favoritesModal.addEventListener('mouseover', showFavoritesModal);
            favoritesModal.addEventListener('mouseleave', hideFavoritesModal);
        } else { // Móvil (click)
            // Asegurarse de que los eventos de mouseover no estén activos
            favoritesImageTrigger.removeEventListener('mouseover', showFavoritesModal);
            favoritesImageTrigger.removeEventListener('mouseleave', hideFavoritesModal);
            favoritesModal.removeEventListener('mouseover', showFavoritesModal);
            favoritesModal.removeEventListener('mouseleave', hideFavoritesModal);
            
            // Evento de clic para mostrar y ocultar el modal
            favoritesImageTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                showFavoritesModal();
            });
            closeFavoritesBtn.addEventListener('click', hideFavoritesModal);
        }
    }

    // Inicializa los eventos
    setupFavoritesModalEvents();

    // Vuelve a configurar los eventos si cambia el tamaño de la pantalla
    window.addEventListener('resize', setupFavoritesModalEvents);
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén el código de las secciones anteriores aquí) ...

    // Lógica para el modal de órdenes
    const ordersModal = document.getElementById('orders-modal');
    const ordersImageTrigger = document.getElementById('orders-image-trigger');
    const closeOrdersBtn = document.querySelector('.close-orders-btn');

    function showOrdersModal() {
        ordersModal.style.display = 'block';
    }

    function hideOrdersModal() {
        ordersModal.style.display = 'none';
    }

    // Configuración de eventos según el tamaño de la pantalla
    function setupOrdersModalEvents() {
        if (window.innerWidth >= 768) { // Escritorio (mouseover)
            // Asegurarse de que los eventos de clic no estén activos
            ordersImageTrigger.removeEventListener('click', showOrdersModal);
            closeOrdersBtn.removeEventListener('click', hideOrdersModal);

            // Eventos de mouseover para mostrar y ocultar el modal
            ordersImageTrigger.addEventListener('mouseover', showOrdersModal);
            ordersImageTrigger.addEventListener('mouseleave', hideOrdersModal);
            ordersModal.addEventListener('mouseover', showOrdersModal);
            ordersModal.addEventListener('mouseleave', hideOrdersModal);
        } else { // Móvil (click)
            // Asegurarse de que los eventos de mouseover no estén activos
            ordersImageTrigger.removeEventListener('mouseover', showOrdersModal);
            ordersImageTrigger.removeEventListener('mouseleave', hideOrdersModal);
            ordersModal.removeEventListener('mouseover', showOrdersModal);
            ordersModal.removeEventListener('mouseleave', hideOrdersModal);
            
            // Evento de clic para mostrar y ocultar el modal
            ordersImageTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                showOrdersModal();
            });
            closeOrdersBtn.addEventListener('click', hideOrdersModal);
        }
    }

    // Inicializa los eventos
    setupOrdersModalEvents();

    // Vuelve a configurar los eventos si cambia el tamaño de la pantalla
    window.addEventListener('resize', setupOrdersModalEvents);
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén el código de las secciones anteriores aquí) ...

    // Lógica para el modal de historial de órdenes
    const historyModal = document.getElementById('history-modal');
    const historyImageTrigger = document.getElementById('history-image-trigger');
    const closeHistoryBtn = document.querySelector('.close-history-btn');

    function showHistoryModal() {
        historyModal.style.display = 'block';
    }

    function hideHistoryModal() {
        historyModal.style.display = 'none';
    }

    // Configuración de eventos según el tamaño de la pantalla
    function setupHistoryModalEvents() {
        if (window.innerWidth >= 768) { // Escritorio (mouseover)
            // Asegurarse de que los eventos de clic no estén activos
            historyImageTrigger.removeEventListener('click', showHistoryModal);
            closeHistoryBtn.removeEventListener('click', hideHistoryModal);

            // Eventos de mouseover para mostrar y ocultar el modal
            historyImageTrigger.addEventListener('mouseover', showHistoryModal);
            historyImageTrigger.addEventListener('mouseleave', hideHistoryModal);
            historyModal.addEventListener('mouseover', showHistoryModal);
            historyModal.addEventListener('mouseleave', hideHistoryModal);
        } else { // Móvil (click)
            // Asegurarse de que los eventos de mouseover no estén activos
            historyImageTrigger.removeEventListener('mouseover', showHistoryModal);
            historyImageTrigger.removeEventListener('mouseleave', hideHistoryModal);
            historyModal.removeEventListener('mouseover', showHistoryModal);
            historyModal.removeEventListener('mouseleave', hideHistoryModal);
            
            // Evento de clic para mostrar y ocultar el modal
            historyImageTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                showHistoryModal();
            });
            closeHistoryBtn.addEventListener('click', hideHistoryModal);
        }
    }

    // Inicializa los eventos
    setupHistoryModalEvents();

    // Vuelve a configurar los eventos si cambia el tamaño de la pantalla
    window.addEventListener('resize', setupHistoryModalEvents);
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén el código de las secciones anteriores aquí) ...

    // Lógica para el modal de "Place Orders Online"
    const madeEasyModal = document.getElementById('made-easy-modal');
    const ordersOnlineTrigger = document.getElementById('orders-online-trigger');
    const closeMadeEasyBtn = document.querySelector('.close-made-easy-btn');

    function showMadeEasyModal() {
        madeEasyModal.style.display = 'block';
    }

    function hideMadeEasyModal() {
        madeEasyModal.style.display = 'none';
    }

    // Configuración de eventos según el tamaño de la pantalla
    function setupMadeEasyModalEvents() {
        if (window.innerWidth >= 768) { // Escritorio (mouseover)
            // Asegurarse de que los eventos de clic no estén activos
            ordersOnlineTrigger.removeEventListener('click', showMadeEasyModal);
            closeMadeEasyBtn.removeEventListener('click', hideMadeEasyModal);

            // Eventos de mouseover para mostrar y ocultar el modal
            ordersOnlineTrigger.addEventListener('mouseover', showMadeEasyModal);
            ordersOnlineTrigger.addEventListener('mouseleave', hideMadeEasyModal);
            madeEasyModal.addEventListener('mouseover', showMadeEasyModal);
            madeEasyModal.addEventListener('mouseleave', hideMadeEasyModal);
        } else { // Móvil (click)
            // Asegurarse de que los eventos de mouseover no estén activos
            ordersOnlineTrigger.removeEventListener('mouseover', showMadeEasyModal);
            ordersOnlineTrigger.removeEventListener('mouseleave', hideMadeEasyModal);
            madeEasyModal.removeEventListener('mouseover', showMadeEasyModal);
            madeEasyModal.removeEventListener('mouseleave', hideMadeEasyModal);

            // Evento de clic para mostrar y ocultar el modal
            ordersOnlineTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                showMadeEasyModal();
            });
            closeMadeEasyBtn.addEventListener('click', hideMadeEasyModal);
        }
    }

    // Inicializa los eventos
    setupMadeEasyModalEvents();

    // Vuelve a configurar los eventos si cambia el tamaño de la pantalla
    window.addEventListener('resize', setupMadeEasyModalEvents);
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén el código de las secciones anteriores aquí) ...

    // Lógica para el formulario de Z-Commerce
    const zCommerceForm = document.getElementById('z-commerce-signup-form');

    if (zCommerceForm) {
        zCommerceForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío por defecto del formulario

            // Simple validación de ejemplo
            let isValid = true;
            const inputs = zCommerceForm.querySelectorAll('input[required], select[required]');

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red'; // Marca el campo vacío en rojo
                } else {
                    input.style.borderColor = '#ccc'; // Restaura el color del borde
                }
            });

            if (isValid) {
                // Aquí podrías recopilar los datos del formulario
                const formData = new FormData(zCommerceForm);
                const data = {};
                for (const [key, value] of formData.entries()) {
                    data[key] = value;
                }

                console.log('Formulario enviado con éxito:', data);
                alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
                zCommerceForm.reset(); // Opcional: resetear el formulario
            } else {
                alert('Por favor, completa todos los campos obligatorios.');
            }
        });
    }

    // Funcionalidad para poblar dinámicamente los selects (ejemplo, puedes extenderlo)
    function populateSelectOptions(selectId, optionsArray) {
        const selectElement = document.getElementById(selectId);
        if (selectElement) {
            // Eliminar opciones existentes excepto la primera (valor por defecto)
            while (selectElement.options.length > 1) {
                selectElement.remove(1);
            }

            optionsArray.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.text;
                selectElement.appendChild(opt);
            });
        }
    }

    // Ejemplo de uso:
    const states = [
        { value: 'AZ', text: 'Arizona' },
        { value: 'CO', text: 'Colorado' },
        { value: 'FL', text: 'Florida' },
        { value: 'IL', text: 'Illinois' },
        { value: 'TX', text: 'Texas' },
        { value: 'WA', text: 'Washington' },
        { value: 'MO', text: 'Missouri' },
        { value: 'NJ', text: 'New Jersey' },
        { value: 'NY', text: 'New York' },
        { value: 'CA', text: 'California' },
        { value: 'PA', text: 'Pennsylvania' },
        { value: 'OH', text: 'Ohio' },
        { value: 'MI', text: 'Michigan' },
        { value: 'NC', text: 'North Carolina' },
        { value: 'GA', text: 'Georgia' },
        { value: 'VA', text: 'Virginia' },
        { value: 'MD', text: 'Maryland' },
        { value: 'MA', text: 'Massachusetts' },
        { value: 'IN', text: 'Indiana' },    
        // ... más estados
    ];
    populateSelectOptions('state-province', states);

    const businessTypes = [
        { value: 'manufacturer', text: 'Manufacturer' },
        { value: 'retailer', text: 'Retailer' },
        { value: 'distributor', text: 'Distributor' },
        { value: 'contractor', text: 'Contractor' },
        { value: 'wholesaler', text: 'Wholesaler' },
        { value: 'service-provider', text: 'Service Provider' },
        { value: 'other', text: 'Other' },
        // ... más tipos de negocio
    ];
    populateSelectOptions('business-type', businessTypes);

    const products = [
        { value: 'steel-pipe', text: 'Steel Pipe' },
        { value: 'fire-sprinkler', text: 'Fire Sprinkler' },
        { value: 'valves', text: 'Valves' },
        { value: 'fittings', text: 'Fittings' },
        { value: 'flanges', text: 'Flanges' },
        { value: 'gaskets', text: 'Gaskets' },
        { value: 'bolts', text: 'Bolts' },
        { value: 'nuts', text: 'Nuts' },
        { value: 'washers', text: 'Washers' },
        { value: 'pipe-hangers', text: 'Pipe Hangers' },
        { value: 'strut-channel', text: 'Strut Channel' },
        { value: 'pipe-insulation', text: 'Pipe Insulation' },
        // ... más productos
    ];
    populateSelectOptions('product-interest', products);
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén el código de las secciones anteriores aquí) ...

    // Lógica para el modal de "Create Favorites"
    const starModal = document.getElementById('star-modal');
    const favoritesImageTrigger = document.getElementById('favorites-image-trigger');
    const closeStarBtn = document.querySelector('.close-star-btn');

    function showStarModal() {
        starModal.style.display = 'block';
    }

    function hideStarModal() {
        starModal.style.display = 'none';
    }

    // Configuración de eventos según el tamaño de la pantalla
    function setupFavoritesModalEvents() {
        if (window.innerWidth >= 768) { // Escritorio (mouseover)
            // Asegurarse de que los eventos de clic no estén activos
            favoritesImageTrigger.removeEventListener('click', showStarModal);
            closeStarBtn.removeEventListener('click', hideStarModal);

            // Eventos de mouseover para mostrar y ocultar el modal
            favoritesImageTrigger.addEventListener('mouseover', showStarModal);
            favoritesImageTrigger.addEventListener('mouseleave', hideStarModal);
            starModal.addEventListener('mouseover', showStarModal); // Para mantenerlo visible si el mouse entra al modal
            starModal.addEventListener('mouseleave', hideStarModal);
        } else { // Móvil (click)
            // Asegurarse de que los eventos de mouseover no estén activos
            favoritesImageTrigger.removeEventListener('mouseover', showStarModal);
            favoritesImageTrigger.removeEventListener('mouseleave', hideStarModal);
            starModal.removeEventListener('mouseover', showStarModal);
            starModal.removeEventListener('mouseleave', hideStarModal);
            
            // Evento de clic para mostrar y ocultar el modal
            favoritesImageTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                showStarModal();
            });
            closeStarBtn.addEventListener('click', hideStarModal);
        }
    }

    // Inicializa los eventos
    setupFavoritesModalEvents();

    // Vuelve a configurar los eventos si cambia el tamaño de la pantalla
    window.addEventListener('resize', setupFavoritesModalEvents);
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén el código de las secciones anteriores aquí) ...

    // Lógica para generar los enlaces del footer de forma modular y escalable
    const productsLinks = [
        { text: 'Electrical Conduit/EC&N', url: '#' },
        { text: 'PVC Conduit', url: '#' },
        { text: 'ZI-Strut', url: '#' },
        { text: 'Standard Pipe', url: '#' },
        { text: 'Steel Fire Sprinkler Pipe', url: '#' },
        { text: 'Mechanical Tube', url: '#' },
        { text: 'Fence Framework', url: '#' },
        { text: 'Energy Tubulars', url: '#' }
    ];

    const servicesLinks = [
        { text: 'Services that MAKE IT eZ', url: '#' },
        { text: 'Z-Commerce', url: '#' },
        { text: 'Electronic Data Interchange (EDI)', url: '#' },
        { text: 'Automated Inventory Management (AIM)', url: '#' }
    ];

    // Función para crear y añadir enlaces
    function createFooterLinks(containerSelector, linksArray) {
        const container = document.querySelector(containerSelector);
        if (container) {
            const ul = document.createElement('ul');
            linksArray.forEach(linkData => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = linkData.url;
                a.textContent = linkData.text;
                li.appendChild(a);
                ul.appendChild(li);
            });
            container.appendChild(ul);
        }
    }

    // Llama a la función para cada sección
    // Esto es solo un ejemplo, el HTML ya tiene los enlaces, pero podrías usar
    // esta lógica si quisieras generar todo el contenido con JS.
    // createFooterLinks('.footer-products-column', productsLinks);
    // createFooterLinks('.footer-services-column', servicesLinks);
});


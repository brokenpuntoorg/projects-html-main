document.addEventListener('DOMContentLoaded', () => {
    // --- Selectores del DOM ---
    const mobileFilterOpenBtn = document.querySelector('.mobile-filter-open-unique');
    const filterModal = document.getElementById('filter-modal-unique');
    const modalCloseBtn = document.querySelector('.modal-close-unique');
    const applyFiltersBtn = document.querySelector('.apply-filters-delivery-unique');
    const immediateFilterCheckbox = document.getElementById('immediate-filter-unique');
    const allProducts = document.querySelectorAll('.product-card-delivery-link-unique');
    
    // Contenido del filtro para clonar en el modal
    const filterContentDesktop = document.querySelector('.filter-sidebar-delivery-unique');
    const filterContentMobile = document.getElementById('filter-content-mobile-unique');

    // Clonar contenido del filtro para el modal móvil
    if (filterContentDesktop && filterContentMobile) {
        // Clonamos el contenido para que al modificarlo en el modal, 
        // no afecte al sidebar de desktop (y viceversa si existieran).
        filterContentMobile.innerHTML = filterContentDesktop.innerHTML;
        
        // Re-obtener el checkbox del filtro en el modal clonado
        const immediateFilterModal = filterContentMobile.querySelector('#immediate-filter-unique');
        
        // Sincronizar el estado del filtro entre desktop y móvil (si se cambia en uno, se refleja en el otro)
        immediateFilterModal.addEventListener('change', () => {
            immediateFilterCheckbox.checked = immediateFilterModal.checked;
            applyFilters();
        });
        immediateFilterCheckbox.addEventListener('change', () => {
            immediateFilterModal.checked = immediateFilterCheckbox.checked;
            applyFilters();
        });
    }


    // --- 1. Lógica del Modal de Filtro (Móvil) ---
    const openModal = () => {
        filterModal.classList.add('is-visible');
        document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    };
    
    const closeModal = () => {
        filterModal.classList.remove('is-visible');
        document.body.style.overflow = '';
    };

    mobileFilterOpenBtn.addEventListener('click', openModal);
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Cerrar el modal al hacer clic en Aplicar (solo para móvil)
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            applyFilters();
            closeModal();
        });
    }

    // --- 2. Lógica del Filtro de Entrega Inmediata ---

    const applyFilters = () => {
        const isImmediateFilterActive = immediateFilterCheckbox.checked;

        allProducts.forEach(product => {
            const isImmediateAvailable = product.dataset.immediate === 'true';

            // Lógica: Si el filtro de "Entrega Hoy" está activo, 
            // solo mostrar productos que tienen data-immediate="true".
            // De lo contrario, mostrar todos.
            if (isImmediateFilterActive) {
                if (isImmediateAvailable) {
                    product.style.display = '';
                } else {
                    product.style.display = 'none';
                }
            } else {
                product.style.display = '';
            }
        });
    };

    // Aplicar filtros al cambiar el checkbox de desktop (se aplica al instante en desktop)
    immediateFilterCheckbox.addEventListener('change', applyFilters);

    // --- 3. Simulación de Ubicación (Logística Avanzada) ---
    // NOTA: En un entorno real, esta verificación se haría al cargar la página
    // después de que el usuario ingresara su código postal.
    const userLocationPostalCode = "55029"; // Código postal ficticio ingresado anteriormente.

    console.log(`Verificando disponibilidad para el código postal: ${userLocationPostalCode}`);
    if (userLocationPostalCode.startsWith("55")) {
        console.log("Zona de alta logística detectada. Servicio de Entrega Inmediata ACTIVO.");
        // Aquí podrías cambiar el texto del título para confirmar la zona.
    } else {
        console.log("Zona de logística estándar. Entrega Inmediata NO disponible.");
        // Aquí podrías deshabilitar el filtro de entrega inmediata.
        // immediateFilterCheckbox.disabled = true;
    }
});
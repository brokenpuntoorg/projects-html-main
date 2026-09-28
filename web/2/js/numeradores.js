document.addEventListener('DOMContentLoaded', () => {
    const mobileFilterBtn = document.querySelector('.mobile-filter-btn-unique');
    const closeFilterBtn = document.querySelector('.close-filter-btn-unique');
    const applyFiltersBtn = document.querySelector('.apply-filters-btn-unique');
    const filterSidebar = document.querySelector('.filter-sidebar-unique');

    if (!mobileFilterBtn || !closeFilterBtn || !filterSidebar) {
        console.error('No se encontraron los elementos necesarios para la lógica del filtro.');
        return;
    }

    // Función para abrir el modal de filtro
    const openFilterModal = () => {
        filterSidebar.classList.add('is-open');
        // Opcional: Ocultar el scroll del cuerpo mientras el modal está abierto
        document.body.style.overflow = 'hidden'; 
    };

    // Función para cerrar el modal de filtro
    const closeFilterModal = () => {
        filterSidebar.classList.remove('is-open');
        document.body.style.overflow = ''; // Restaurar el scroll
    };

    // 1. Manejadores de Eventos para Abrir/Cerrar
    mobileFilterBtn.addEventListener('click', openFilterModal);
    closeFilterBtn.addEventListener('click', closeFilterModal);
    
    // 2. Cerrar el modal al hacer clic en Aplicar (en móvil)
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', (e) => {
            // Aquí iría la lógica para enviar los filtros
            // e.preventDefault(); 
            // alert('Filtros aplicados. (Cerrando modal)');
            closeFilterModal();
        });
    }

    // 3. Cerrar el modal si se hace clic fuera del mismo (solo si es modal)
    // No es necesario ya que el modal ocupa la pantalla completa.

});
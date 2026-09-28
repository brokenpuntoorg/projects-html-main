document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.querySelector('.filter-btn');
    const closeFilterBtn = document.querySelector('.close-filter-btn');
    const filterPanelMobile = document.querySelector('.filter-panel-mobile');

    // Muestra el panel de filtro móvil al hacer clic
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            filterPanelMobile.classList.add('is-open');
        });
    }

    // Oculta el panel de filtro móvil al hacer clic en el botón de cierre
    if (closeFilterBtn) {
        closeFilterBtn.addEventListener('click', function() {
            filterPanelMobile.classList.remove('is-open');
        });
    }
});
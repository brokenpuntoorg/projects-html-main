document.addEventListener('DOMContentLoaded', () => {
    const filterPanel = document.querySelector('.gallery-filter-panel');
    const filterToggleBtn = document.querySelector('.filter-toggle-btn');
    const filterCloseBtn = document.querySelector('.filter-close-btn');

    // Funcionalidad para abrir y cerrar el panel de filtros en móvil
    if (filterToggleBtn) {
        filterToggleBtn.addEventListener('click', () => {
            filterPanel.classList.add('is-open');
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
        });
    }

    if (filterCloseBtn) {
        filterCloseBtn.addEventListener('click', () => {
            filterPanel.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    }

    // Funcionalidad para los acordeones de los filtros
    const filterGroups = document.querySelectorAll('.filter-group-header');

    filterGroups.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;
            const content = header.nextElementSibling;
            const toggleIcon = header.querySelector('.toggle-icon');

            if (content.style.display === 'block' || content.style.display === '') {
                content.style.display = 'none';
                toggleIcon.textContent = '+';
            } else {
                content.style.display = 'block';
                toggleIcon.textContent = '-';
            }
        });
    });

    // Lógica para los sliders de precio
    const minSlider = document.querySelector('.price-slider-min');
    const maxSlider = document.querySelector('.price-slider-max');
    const minDisplay = document.querySelector('.min-price-value');
    const maxDisplay = document.querySelector('.max-price-value');

    const updatePriceRange = () => {
        let minVal = parseInt(minSlider.value);
        let maxVal = parseInt(maxSlider.value);

        if (minVal > maxVal) {
            minVal = maxVal;
            minSlider.value = maxVal;
        }

        minDisplay.textContent = `${minVal} MXN`;
        maxDisplay.textContent = `${maxVal} MXN`;
    };

    minSlider.addEventListener('input', updatePriceRange);
    maxSlider.addEventListener('input', updatePriceRange);
    
    // Inicializar los valores al cargar
    updatePriceRange();
});
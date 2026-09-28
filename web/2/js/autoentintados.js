document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para el menú lateral en móvil
    const filterToggleBtn = document.querySelector('.sello-filter-toggle-btn');
    const sidebar = document.getElementById('sello-sidebar');
    const closeSidebarBtn = document.querySelector('.sello-close-sidebar-btn');

    if (filterToggleBtn && sidebar && closeSidebarBtn) {
        filterToggleBtn.addEventListener('click', () => {
            sidebar.classList.add('is-open');
        });

        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('is-open');
        });
    }

    // 2. Lógica para los submenús desplegables (acordeón de filtros)
    const accordionButtons = document.querySelectorAll('.sello-accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const menu = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.classList.remove('show');
                    otherButton.setAttribute('aria-expanded', 'false');
                    const otherIcon = otherButton.querySelector('i');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });

            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                menu.classList.remove('show');
                button.setAttribute('aria-expanded', 'false');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                menu.classList.add('show');
                button.setAttribute('aria-expanded', 'true');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });

    // 3. Lógica para el menú desplegable de "Ordenar por"
    const sortButton = document.querySelector('.sello-sort-btn');
    const sortMenu = document.querySelector('.sello-sort-menu');

    if (sortButton && sortMenu) {
        sortButton.addEventListener('click', (e) => {
            e.stopPropagation();
            sortMenu.classList.toggle('show');
        });
    }

    // Cierra el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (sortButton && sortMenu && !sortButton.contains(e.target) && !sortMenu.contains(e.target)) {
            sortMenu.classList.remove('show');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const minRange = document.querySelector('.price-filter-min-range');
    const maxRange = document.querySelector('.price-filter-max-range');
    const minValueDisplay = document.querySelector('.price-filter-min-value');
    const maxValueDisplay = document.querySelector('.price-filter-max-value');
    const rangeContainer = document.querySelector('.price-filter-range-container');

    const updatePriceRange = () => {
        let minVal = parseInt(minRange.value);
        let maxVal = parseInt(maxRange.value);

        // Evita que el valor mínimo supere al máximo
        if (minVal > maxVal) {
            minVal = maxVal;
            minRange.value = maxVal;
        }

        // Evita que el valor máximo sea menor que el mínimo
        if (maxVal < minVal) {
            maxVal = minVal;
            maxRange.value = minVal;
        }

        minValueDisplay.textContent = `${minVal} MXN`;
        maxValueDisplay.textContent = `${maxVal} MXN`;

        // Lógica para la barra de relleno de color
        const totalRange = maxRange.max - minRange.min;
        const minPercent = ((minVal - minRange.min) / totalRange) * 100;
        const maxPercent = ((maxVal - minRange.min) / totalRange) * 100;

        rangeContainer.style.setProperty('--min-fill', `${minPercent}%`);
        rangeContainer.style.setProperty('--fill-width', `${maxPercent - minPercent}%`);
    };

    // Eventos para actualizar al mover los sliders
    minRange.addEventListener('input', updatePriceRange);
    maxRange.addEventListener('input', updatePriceRange);

    // Inicializar la visualización de los valores al cargar la página
    updatePriceRange();
});
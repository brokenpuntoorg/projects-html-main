document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para el menú lateral en móvil
    const filterToggleBtn = document.querySelector('.filter-toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn');

    if (filterToggleBtn && sidebar && closeSidebarBtn) {
        filterToggleBtn.addEventListener('click', () => {
            sidebar.classList.add('is-open');
        });

        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('is-open');
        });
    }

    // 2. Lógica para los submenús desplegables (acordeón de filtros)
    const accordionButtons = document.querySelectorAll('.accordion-btn');

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
    const sortButton = document.querySelector('.sort-btn');
    const sortMenu = document.querySelector('.sort-menu');

    if (sortButton && sortMenu) {
        sortButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic se propague al documento
            sortMenu.classList.toggle('show');
        });
    }

    // Opcional: Cierra el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (sortButton && sortMenu && !sortButton.contains(e.target) && !sortMenu.contains(e.target)) {
            sortMenu.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos principales del menú
    const menuToggle = document.getElementById('menu-toggle-auto');
    const closeMenu = document.getElementById('close-menu-auto');
    const offCanvasMenu = document.getElementById('off-canvas-menu-auto');
    const pageOverlay = document.getElementById('page-overlay-auto');
    
    // 2. Elementos de los submenús colapsables
    const submenuToggles = document.querySelectorAll('.submenu-toggle-auto');

    // ==========================================================
    // FUNCIONALIDAD 1: ABRIR/CERRAR MENÚ LATERAL
    // ==========================================================
    
    // Función para abrir el menú
    function openMenu() {
        offCanvasMenu.classList.add('open');
        pageOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Evita el scroll del cuerpo
    }

    // Función para cerrar el menú
    function closeMenuHandler() {
        offCanvasMenu.classList.remove('open');
        pageOverlay.classList.remove('visible');
        document.body.style.overflow = ''; // Restaura el scroll del cuerpo
        
        // Opcional: Colapsar todos los submenús al cerrar el menú principal
        submenuToggles.forEach(toggle => {
            const submenu = toggle.nextElementSibling;
            if (submenu.classList.contains('expanded')) {
                submenu.style.maxHeight = null;
                submenu.classList.remove('expanded');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Event Listeners para abrir y cerrar
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', closeMenuHandler);
    }

    if (pageOverlay) {
        pageOverlay.addEventListener('click', closeMenuHandler);
    }
    
    // ==========================================================
    // FUNCIONALIDAD 2: DESPLIEGUE DE SUBMENÚS COLAPSABLES
    // ==========================================================

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault(); // Evita cualquier navegación por defecto si el botón estuviera dentro de un enlace

            const submenu = toggle.nextElementSibling;
            
            // Si el submenú está expandido, lo colapsa
            if (submenu.classList.contains('expanded')) {
                submenu.style.maxHeight = null; // Cierra suavemente
                submenu.classList.remove('expanded');
                toggle.setAttribute('aria-expanded', 'false');
            } else {
                // Antes de expandir, colapsa cualquier otro submenú abierto (comportamiento de acordeón)
                submenuToggles.forEach(otherToggle => {
                    const otherSubmenu = otherToggle.nextElementSibling;
                    if (otherSubmenu !== submenu && otherSubmenu.classList.contains('expanded')) {
                        otherSubmenu.style.maxHeight = null;
                        otherSubmenu.classList.remove('expanded');
                        otherToggle.setAttribute('aria-expanded', 'false');
                    }
                });

                // Expande el submenú actual
                submenu.classList.add('expanded');
                // Establece el maxHeight para permitir la transición CSS (scrollIntoView para asegurar visibilidad)
                submenu.style.maxHeight = submenu.scrollHeight + "px"; 
                toggle.setAttribute('aria-expanded', 'true');
                
                // Opcional: Asegura que el elemento desplegado sea visible en el scroll
                // toggle.parentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
});
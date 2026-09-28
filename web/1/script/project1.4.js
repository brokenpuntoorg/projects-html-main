document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos del DOM
    const hamburgerMenu = document.getElementById('hamburger-menu-toggle');
    const mobileOverlayMenu = document.getElementById('mobile-overlay-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    const body = document.body;

    // Función para abrir el menú
    function openMobileMenu() {
        body.classList.add('menu-open');
        // Opcional: Deshabilitar el scroll del body cuando el menú está abierto
        // body.style.overflow = 'hidden';
    }

    // Función para cerrar el menú
    function closeMobileMenu() {
        body.classList.remove('menu-open');
        // Opcional: Habilitar el scroll del body cuando el menú está cerrado
        // body.style.overflow = '';
    }

    // Event listener para abrir el menú al hacer clic en el icono de hamburguesa
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', openMobileMenu);
    }

    // Event listener para cerrar el menú al hacer clic en el botón de cierre
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }

    // Opcional: Cerrar el menú si se hace clic en un enlace dentro del menú (para navegación)
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            // Pequeño retraso para permitir la navegación antes de cerrar
            setTimeout(closeMobileMenu, 300); 
        });
    });

    // Opcional: Cerrar el menú si se hace clic fuera de él (en el overlay)
    // mobileOverlayMenu.addEventListener('click', (event) => {
    //     if (event.target === mobileOverlayMenu) { // Solo si se hace clic directamente en el overlay
    //         closeMobileMenu();
    //     }
    // });
});

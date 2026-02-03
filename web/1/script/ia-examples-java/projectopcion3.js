document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del menú de hamburguesa
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }

    // Funcionalidad del menú desplegable móvil
    const mobileSubmenuParent = document.querySelector('.mobile-nav .has-submenu');
    
    if (mobileSubmenuParent) {
        // Obtenemos el enlace para evitar que el clic vaya a la página
        const submenuLink = mobileSubmenuParent.querySelector('a');

        submenuLink.addEventListener('click', function(event) {
            // Previene el comportamiento por defecto del enlace
            event.preventDefault();
            // Alterna la clase 'active' para mostrar/ocultar el submenú
            mobileSubmenuParent.classList.toggle('active');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Funcionalidad para el menú de hamburguesa
    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }

    // Funcionalidad para el menú desplegable de escritorio
    const submenuParent = document.querySelector('.has-submenu');
    const body = document.body;

    if (submenuParent) {
        submenuParent.addEventListener('mouseenter', function() {
            // Añade la clase 'is-active' para mostrar el menú
            this.classList.add('is-active');
            
            // Crea y añade el overlay
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            body.appendChild(overlay);
        });

        submenuParent.addEventListener('mouseleave', function() {
            // Elimina la clase y el overlay
            this.classList.remove('is-active');
            const overlay = document.querySelector('.overlay');
            if (overlay) {
                overlay.remove();
            }
        });
    }
});
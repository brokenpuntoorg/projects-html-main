document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del menú de hamburguesa
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    }

    // Funcionalidad para todos los submenús en la versión móvil
    const mobileSubmenuParents = document.querySelectorAll('.mobile-nav .has-submenu');
    
    mobileSubmenuParents.forEach(function(parent) {
        const submenuLink = parent.querySelector('a');

        if (submenuLink) {
            submenuLink.addEventListener('click', function(event) {
                event.preventDefault();
                parent.classList.toggle('active');
            });
        }
    });
});
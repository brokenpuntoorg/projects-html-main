document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileSubmenus = document.querySelectorAll('.mobile-nav-list .has-submenu > a');

    // Toggle para el menú hamburguesa
    menuToggle.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('open');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('open');
    });

    // Despliegue de submenús en móvil
    mobileSubmenus.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const parentLi = e.target.closest('li.has-submenu');
            const submenu = parentLi.querySelector('.mobile-submenu');

            // Cierra todos los demás submenús
            document.querySelectorAll('.mobile-nav-list .has-submenu.open').forEach(openItem => {
                if (openItem !== parentLi) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.mobile-submenu').style.maxHeight = '0';
                }
            });

            // Abre o cierra el submenú actual
            parentLi.classList.toggle('open');
            if (parentLi.classList.contains('open')) {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            } else {
                submenu.style.maxHeight = '0';
            }
        });
    });
});

document.getElementById('accountForm').addEventListener('submit', function(event) {
    const form = this;
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;

    inputs.forEach(input => {
        if (input.type !== 'submit' && input.value.trim() === '') {
            isValid = false;
            // Opcional: añadir clase de error para resaltar el campo
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (!isValid) {
        event.preventDefault(); // Evita que el formulario se envíe si hay errores
        alert('Por favor, completa todos los campos.');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    
    // Duplica las tarjetas para el efecto infinito
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });
});
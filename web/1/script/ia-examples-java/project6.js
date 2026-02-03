document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    // Función para abrir el menú móvil
    function openMobileMenu() {
        mobileMenu.classList.add('open');
        body.classList.add('menu-open');
    }

    // Función para cerrar el menú móvil
    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        body.classList.remove('menu-open');
    }

    // Toggle para el menú de hamburguesa (abrir)
    hamburger.addEventListener('click', openMobileMenu);

    // Botón para cerrar el menú
    closeBtn.addEventListener('click', closeMobileMenu);

    // Cierra el menú al hacer clic fuera de él
    body.addEventListener('click', (e) => {
        if (body.classList.contains('menu-open') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });


    document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén el código de las secciones anteriores aquí) ...

    // Lógica para el botón del Hero
    const heroButton = document.querySelector('.hero-btn');

    if (heroButton) {
        heroButton.addEventListener('click', (e) => {
            // Animación al hacer clic
            e.preventDefault();
            heroButton.style.transform = 'scale(0.95)';
            heroButton.style.transition = 'transform 0.1s ease-in-out';
            
            setTimeout(() => {
                heroButton.style.transform = 'scale(1)';
                console.log('Botón del héroe presionado.');
                // Aquí puedes agregar la lógica para redirigir
                // window.location.href = '#'; 
            }, 100);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (Código anterior de otras secciones) ...

    const zcommerceSection = document.querySelector('.zcommerce-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (zcommerceSection) {
        zcommerceSection.style.opacity = '0';
        zcommerceSection.style.transform = 'translateY(50px)';
        zcommerceSection.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(zcommerceSection);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // ... (Código para otras secciones) ...

    const ediSection = document.querySelector('.edi-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (ediSection) {
        ediSection.style.opacity = '0';
        ediSection.style.transform = 'translateY(50px)';
        ediSection.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(ediSection);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (Código para otras secciones) ...

    const inventorySection = document.querySelector('.inventory-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (inventorySection) {
        inventorySection.style.opacity = '0';
        inventorySection.style.transform = 'translateY(50px)';
        inventorySection.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(inventorySection);
    }
}); });

document.addEventListener('DOMContentLoaded', () => {
    // ... (Código para otras secciones) ...

    const repForm = document.querySelector('.rep-form');
    const repInput = document.querySelector('.rep-input');

    if (repForm) {
        repForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita el envío predeterminado del formulario
            
            const searchTerm = repInput.value.trim();
            if (searchTerm) {
                console.log(`Buscando representante para: ${searchTerm}`);
                // Aquí podrías agregar la lógica para enviar los datos a un backend
                // o para mostrar los resultados en la página.
                alert(`Buscando representante en: ${searchTerm}`);
            } else {
                alert('Por favor, ingresa un código postal o una ciudad y estado.');
            }
        });
    }
});
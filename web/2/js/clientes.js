// Archivo: clients-carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    
    if (!track) {
        console.error('El elemento .carousel-track no fue encontrado.');
        return;
    }

    // 1. Duplicar los elementos para crear la ilusión de infinito
    const items = track.querySelectorAll('.client-item');
    
    // Clonar y adjuntar cada item
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    // 2. Ajustar la duración de la animación con JavaScript
    const totalItems = items.length; // Items originales
    // 3 segundos por item original para el ciclo completo (de la mitad de la pista)
    const animationDuration = totalItems * 3; 
    
    // 🚨 CAMBIO CLAVE: Ya no se establece animation-name aquí. 
    // Ahora, solo establecemos la duración y dejamos que el CSS maneje el nombre.
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        .carousel-track {
            /* Establece la duración calculada. */
            animation-duration: ${animationDuration}s !important; 
            /* Se asume que el CSS principal YA tiene un 'animation-name' y 
               que este se cambiará por @media queries si es necesario. */
        }
    `;
    document.head.appendChild(styleTag);
    
    // 3. Manejar el efecto de overlay en dispositivos táctiles (Touch Events)
    const allClientItems = track.querySelectorAll('.client-item');

    allClientItems.forEach(item => {
        item.addEventListener('touchstart', function(e) {
            // Remover 'active' de todos los demás para cerrar overlays abiertos
            allClientItems.forEach(i => {
                if (i !== this) {
                    i.classList.remove('active-touch');
                }
            });

            // Toggle 'active' en el elemento tocado
            this.classList.toggle('active-touch');
        }, { passive: true });
    });

    // Añadir estilos para el active-touch (simulando :hover)
    const touchStyle = document.createElement('style');
    touchStyle.innerHTML += `
        .client-item.active-touch .client-logo {
            opacity: 1;
            transform: scale(1.1);
        }
        .client-item.active-touch .client-overlay {
            opacity: 1;
        }
    `;
    document.head.appendChild(touchStyle);
});
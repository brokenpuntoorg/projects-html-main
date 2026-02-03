document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    
    // Duplica las tarjetas de producto para el bucle infinito
    const originalCards = Array.from(carouselTrack.children);
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        carouselTrack.appendChild(clone);
    });
    
    // Obtiene todas las tarjetas (originales + duplicadas)
    const allCards = Array.from(carouselTrack.children);
    const totalCards = originalCards.length;
    let currentIndex = 0;
    let cardWidth;

    // Función para actualizar la posición del carrusel
    const updateCarousel = () => {
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    // Lógica para el bucle infinito
    const checkForLoop = () => {
        if (currentIndex >= totalCards) {
            carouselTrack.style.transition = 'none';
            currentIndex = 0;
            updateCarousel();
            void carouselTrack.offsetWidth;
            carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        }
    };
    
    // Lógica para el botón "Siguiente"
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
        checkForLoop();
    });

    // Lógica para el botón "Anterior"
    const checkForReverseLoop = () => {
        if (currentIndex < 0) {
            carouselTrack.style.transition = 'none';
            currentIndex = totalCards - 1;
            updateCarousel();
            void carouselTrack.offsetWidth;
            carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        }
    };

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
        checkForReverseLoop();
    });

    // Calcula el ancho de la tarjeta al cargar y redimensionar
    const updateCardWidth = () => {
        if (allCards.length > 0) {
            const cardStyle = getComputedStyle(allCards[0]);
            const cardMarginRight = parseInt(cardStyle.marginRight);
            cardWidth = allCards[0].offsetWidth + cardMarginRight;
        }
        updateCarousel();
    };

    window.addEventListener('resize', updateCardWidth);
    updateCardWidth();
});
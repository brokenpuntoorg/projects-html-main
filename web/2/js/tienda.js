

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const cardWidth = cards[0].getBoundingClientRect().width;

    let totalCards = cards.length;
    let cardIndex = 0;
    let isTransitioning = false;

    // Clonar las tarjetas al inicio y al final para el bucle infinito
    const numClones = 5; // Clonar al menos la cantidad de tarjetas visibles en escritorio
    for (let i = 0; i < numClones; i++) {
        const cloneStart = cards[i].cloneNode(true);
        const cloneEnd = cards[totalCards - 1 - i].cloneNode(true);
        track.appendChild(cloneStart);
        track.prepend(cloneEnd);
    }

    // Actualizar la lista de tarjetas y el total después de clonar
    const clonedCards = Array.from(track.children);
    totalCards = clonedCards.length;
    cardIndex = numClones;

    // Mover el track a la posición inicial (el primer clon)
    track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;

    // Mover el carrusel
    const moveCarousel = () => {
        if (isTransitioning) return;
        isTransitioning = true;
        track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;

        // Detectar si el movimiento es al inicio o al final del bucle infinito
        track.addEventListener('transitionend', () => {
            if (cardIndex >= totalCards - numClones) {
                // Volver al inicio sin transición
                track.style.transition = 'none';
                cardIndex = numClones;
                track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
            } else if (cardIndex < numClones) {
                // Volver al final sin transición
                track.style.transition = 'none';
                cardIndex = totalCards - numClones - 1;
                track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
            }
            track.style.transition = 'transform 0.5s ease-in-out';
            isTransitioning = false;
        }, { once: true });
    };

    // Botón de Siguiente
    nextButton.addEventListener('click', () => {
        if (isTransitioning) return;
        cardIndex++;
        moveCarousel();
    });

    // Botón de Anterior
    prevButton.addEventListener('click', () => {
        if (isTransitioning) return;
        cardIndex--;
        moveCarousel();
    });
});





    
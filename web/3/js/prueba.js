document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    const slidesToShow = 1; // Número de slides visibles
    const transitionSpeed = 500; // Velocidad de la transición en ms
    const slidesToClone = 0; // Cantidad de slides clonados en cada extremo

    let index = 0; // Índice de la diapositiva original

    // Establece la posición inicial del carrusel en los slides reales
    const setInitialPosition = () => {
        const slideWidth = slides[0].offsetWidth;
        const gap = 20;
        track.style.transform = `translateX(-${(slideWidth + gap) * slidesToClone}px)`;
    };

    const moveToNextSlide = () => {
        index++;
        const slideWidth = slides[0].offsetWidth;
        const gap = 20;
        track.style.transform = `translateX(-${(slideWidth + gap) * (index + slidesToClone)}px)`;
    };

    const moveToPrevSlide = () => {
        index--;
        const slideWidth = slides[0].offsetWidth;
        const gap = 20;
        track.style.transform = `translateX(-${(slideWidth + gap) * (index + slidesToClone)}px)`;
    };

    // Event listeners para los botones de navegación
    nextButton.addEventListener('click', () => {
        moveToNextSlide();
    });

    prevButton.addEventListener('click', () => {
        moveToPrevSlide();
    });

    // Maneja el bucle infinito al final de la transición
    track.addEventListener('transitionend', () => {
        const totalRealSlides = slides.length - slidesToClone * 2;

        if (index >= totalRealSlides) {
            track.style.transition = 'none';
            index = 0;
            const slideWidth = slides[0].offsetWidth;
            const gap = 20;
            track.style.transform = `translateX(-${(slideWidth + gap) * slidesToClone}px)`;
        }

        if (index < 0) {
            track.style.transition = 'none';
            index = totalRealSlides - 1;
            const slideWidth = slides[0].offsetWidth;
            const gap = 20;
            track.style.transform = `translateX(-${(slideWidth + gap) * (index + slidesToClone)}px)`;
        }
    });

    // Inicializar el carrusel
    setInitialPosition();
});


document.addEventListener('DOMContentLoaded', () => {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            const caption = item.querySelector('.video-caption').textContent;
            alert(`Haz clic en el video: "${caption.trim()}"`);
        });
    });
});
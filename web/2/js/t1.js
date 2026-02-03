document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track-unique');
    const prevBtn = document.querySelector('.prev-button-unique');
    const nextBtn = document.querySelector('.next-button-unique');
    
    if (!carouselTrack || !prevBtn || !nextBtn) return;

    const originalCards = Array.from(carouselTrack.children).slice(0, 10); // Solo las 10 originales
    const totalOriginalCards = originalCards.length;
    
    // Si ya duplicaste las tarjetas en el HTML o en una ejecución anterior,
    // este código de clonación puede causar más problemas.
    // Si tu HTML ya tiene las copias, comenta las 3 líneas siguientes:
    originalCards.forEach(card => {
        carouselTrack.appendChild(card.cloneNode(true));
    });

    let currentIndex = 0;
    let cardFullWidth = 0;
    
    const calculateCardWidth = () => {
        if (originalCards.length === 0) return;
        
        const firstCardLink = originalCards[0];
        // 1. Obtener el ancho del enlace (el contenedor que tiene el width: calc(100% / 1.5))
        const width = firstCardLink.offsetWidth;
        
        // 2. Obtener el margen DERECHO del elemento product-card (el margen de 10px)
        const cardElement = firstCardLink.querySelector('.product-card-unique');
        const cardMarginStyle = getComputedStyle(cardElement);
        const cardMarginRight = parseFloat(cardMarginStyle.marginRight) || 0;
        
        // 3. El ancho de desplazamiento es el ancho del link (width) + su margen derecho
        // (ya que el link toma el espacio, y el margen de 10px es interno a su espacio)
        cardFullWidth = width + cardMarginRight; 
        
        // CORRECCIÓN CLAVE PARA EL CENTRADO EN MÓVIL:
        // En móvil, si mostramos 1.5 tarjetas, la siguiente NO empieza a 1 cardFullWidth.
        // Lo que realmente queremos es desplazar una tarjeta completa (width + 2*margen)
        // para que la siguiente tarjeta quede 'al inicio' del área visible.
        
        const fullCardWidthWithBothMargins = cardElement.offsetWidth + 
                                            (parseFloat(cardMarginStyle.marginLeft) || 0) + 
                                            (parseFloat(cardMarginStyle.marginRight) || 0);

        // Sin embargo, para la mayoría de los carruseles flexbox, el cálculo del link
        // es el más fiable, pero puede que tu CSS lo maneje de forma que el margen
        // izquierdo de la siguiente tarjeta es lo que causa el desplazamiento extra.
        
        // PROBAMOS ESTE CÁLCULO MÁS ROBUSTO, que incluye el margen izquierdo de la siguiente tarjeta:
        const nextCard = originalCards[1] || originalCards[0];
        const nextCardStyle = getComputedStyle(nextCard.querySelector('.product-card-unique'));
        const nextCardMarginLeft = parseFloat(nextCardStyle.marginLeft) || 0;
        
        // Ancho de movimiento: Ancho del link + margen del card + el margen izquierdo del siguiente card
        // Esta es la unidad real de movimiento en muchos diseños Flexbox
        cardFullWidth = width + cardMarginRight + nextCardMarginLeft;

        // Si el problema persiste, usa simplemente el width del primer enlace, ya que es la unidad visual:
        // cardFullWidth = firstCardLink.offsetWidth; 
    };

    const slideTo = () => {
        carouselTrack.style.transform = `translateX(-${currentIndex * cardFullWidth}px)`;
    };
    
    // --- Lógica de Botones (igual que antes, solo usa las nuevas variables) ---
    nextBtn.addEventListener('click', () => {
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        currentIndex++;
        slideTo();
        
        if (currentIndex >= totalOriginalCards) {
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                currentIndex = 0;
                slideTo();
                void carouselTrack.offsetWidth;
            }, 500);
        }
    });

    prevBtn.addEventListener('click', () => {
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        currentIndex--;

        if (currentIndex < 0) {
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                currentIndex = totalOriginalCards - 1;
                slideTo();
                void carouselTrack.offsetWidth;
            }, 500);
        } else {
            slideTo();
        }
    });

    const init = () => {
        calculateCardWidth();
        slideTo(); 
    };
    
    window.addEventListener('resize', init);
    init();
});
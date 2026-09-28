document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn-unique');
    const productCards = document.querySelectorAll('.product-card-unique');
    
    // Función principal para filtrar los productos
    const filterProducts = (filter) => {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            // Si el filtro es 'all' o la categoría de la tarjeta coincide, lo mostramos (flex)
            if (filter === 'all' || cardCategory === filter) {
                card.style.display = 'block'; 
            } else {
                // Si no coincide, lo ocultamos
                card.style.display = 'none';
            }
        });
    };

    // Asignar el evento de clic a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // 1. Aplicar el filtro a la cuadrícula
            filterProducts(filterValue);
            
            // 2. Actualizar el estado visual del botón seleccionado
            filterButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    // Inicialización: Mostrar todos los productos al cargar la página
    filterProducts('all'); 
});
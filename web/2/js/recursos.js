document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn-unique');
    const resourceCards = document.querySelectorAll('.resource-card-unique');

    // Función para manejar el filtrado
    const filterResources = (filter) => {
        resourceCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            // Si el filtro es 'all' o la categoría de la tarjeta coincide con el filtro, la mostramos.
            if (filter === 'all' || cardCategory === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Manejador de clic para los botones de categoría
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // 1. Aplicar el filtro a la cuadrícula
            filterResources(filter);
            
            // 2. Actualizar el estado visual de los botones
            categoryButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    // Inicializar: Asegurarse de que todos los recursos se muestren al cargar la página
    filterResources('all');
});
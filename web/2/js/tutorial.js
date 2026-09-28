document.addEventListener('DOMContentLoaded', () => {
    const brandButtons = document.querySelectorAll('.brand-btn-unique');
    const colopTutorial = document.getElementById('tutorial-colop');
    const trodatTutorial = document.getElementById('tutorial-trodat');

    // Función para cambiar el tutorial visible
    const switchTutorial = (brand) => {
        // Ocultar ambos
        colopTutorial.classList.add('hidden-tutorial');
        trodatTutorial.classList.add('hidden-tutorial');
        
        // Mostrar el tutorial seleccionado
        if (brand === 'colop') {
            colopTutorial.classList.remove('hidden-tutorial');
        } else if (brand === 'trodat') {
            trodatTutorial.classList.remove('hidden-tutorial');
        }
    };

    // Manejador de clic para los botones de marca
    brandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedBrand = button.getAttribute('data-brand');
            
            // 1. Cambiar el contenido
            switchTutorial(selectedBrand);
            
            // 2. Actualizar el estilo del botón
            brandButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    // Inicialización: Asegurar que el tutorial de COLOP esté activo por defecto
    switchTutorial('colop');
});
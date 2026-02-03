document.addEventListener('DOMContentLoaded', () => {
    const typeButtons = document.querySelectorAll('.type-btn-unique');
    const polymerTutorial = document.getElementById('cleaning-polymer');
    const woodTutorial = document.getElementById('cleaning-wood');
    
    // Si no encontramos los elementos clave, salimos del script.
    if (!polymerTutorial || !woodTutorial || typeButtons.length === 0) {
        console.error("Elementos del tutorial no encontrados. Saliendo del script.");
        return;
    }

    // Función para cambiar el tutorial visible
    const switchTutorial = (type) => {
        // Aseguramos que solo un botón esté activo y solo un contenido esté visible
        
        // Ocultar ambos y resetear botones
        polymerTutorial.classList.add('hidden-type');
        woodTutorial.classList.add('hidden-type');
        typeButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Mostrar el tutorial seleccionado y activar el botón
        if (type === 'polymer') {
            polymerTutorial.classList.remove('hidden-type');
            // Encuentra y activa el botón de polímero
            const polymerBtn = document.querySelector('.type-btn-unique[data-type="polymer"]');
            if (polymerBtn) polymerBtn.classList.add('selected');

        } else if (type === 'wood') {
            woodTutorial.classList.remove('hidden-type');
            // Encuentra y activa el botón de madera
            const woodBtn = document.querySelector('.type-btn-unique[data-type="wood"]');
            if (woodBtn) woodBtn.classList.add('selected');
        }
    };

    // Manejador de clic para los botones de tipo
    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedType = button.getAttribute('data-type');
            
            // Ya no es necesario manejar el cambio de clase del botón aquí,
            // la función switchTutorial lo hace por nosotros, asegurando que 
            // solo el contenido visible tenga el botón activo.
            switchTutorial(selectedType);
        });
    });

    // Inicialización: Mostrar el tutorial por defecto
    // 🚨 Esta línea se asegura de que inicie correctamente en cualquier dispositivo.
    switchTutorial('polymer'); 
});
document.addEventListener('DOMContentLoaded', () => {
    const issueCards = document.querySelectorAll('.ts-issue-card-unique');

    issueCards.forEach(card => {
        const title = card.querySelector('.issue-title-unique');
        
        // Asignamos el evento de clic al título de la causa
        title.addEventListener('click', () => {
            // Alternar la clase 'active' en la tarjeta para mostrar/ocultar la solución
            const is_active = card.classList.contains('active');
            
            // Opcional: Cerrar todas las demás tarjetas
            issueCards.forEach(c => c.classList.remove('active'));

            // Alternar la tarjeta actual
            if (!is_active) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    });

    console.log("Funcionalidad de Acordeón para Solución de Problemas inicializada.");
});
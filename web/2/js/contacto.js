// Archivo: contact-form.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    const messageContainer = document.getElementById('form-message');

    if (!form || !messageContainer) {
        console.error('El formulario o el contenedor de mensajes no fueron encontrados.');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío tradicional del formulario
        messageContainer.style.display = 'none';
        messageContainer.classList.remove('success', 'error');

        // 1. Validación Básica del Lado del Cliente
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('is-invalid'); // Puedes usar esta clase para pintar bordes rojos en CSS
            } else {
                field.classList.remove('is-invalid');
            }
        });

        if (!isValid) {
            showMessage('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }

        // 2. Simulación de Envío de Datos (Reemplazar con fetch/XMLHttpRequest real)
        const submitButton = form.querySelector('.submit-button');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Simular un retardo de red (2 segundos)
        setTimeout(() => {
            // Aquí iría tu lógica real de 'fetch' a tu backend (ej. PHP, Node, etc.)
            const submissionSuccessful = true; // Cambiar a false para probar el mensaje de error

            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Solicitud de Cotización';

            if (submissionSuccessful) {
                showMessage('¡Gracias! Tu solicitud ha sido enviada con éxito. Nos pondremos en contacto pronto.', 'success');
                form.reset(); // Limpiar el formulario al tener éxito
            } else {
                showMessage('Ocurrió un error al enviar tu solicitud. Por favor, intenta de nuevo o contáctanos por teléfono.', 'error');
            }
            
        }, 2000);
    });

    /**
     * Muestra un mensaje al usuario.
     * @param {string} message - El texto del mensaje.
     * @param {string} type - 'success' o 'error'.
     */
    function showMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.classList.add(type);
        messageContainer.style.display = 'block';
    }
});
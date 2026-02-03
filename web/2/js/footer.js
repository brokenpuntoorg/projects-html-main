// Función de inclusión (la misma que usamos para el header)
    function includeHTML(elementId, fileUrl) {
        const placeholder = document.getElementById(elementId);
        if (!placeholder) return; 

        fetch(fileUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el componente: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                placeholder.innerHTML = `<p style="color:red;">Error al cargar el pie de página.</p>`;
            });
    }

    // Llama a la función para inyectar el footer
    includeHTML('footer-placeholder', 'footer.html');
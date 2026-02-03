function includeHTML(elementId, fileUrl) {
        const placeholder = document.getElementById(elementId);
        
        fetch(fileUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el header: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                placeholder.innerHTML = `<p style="color:red;">Error al cargar el componente: ${fileUrl}</p>`;
            });
    }

    // Llama a la función para inyectar el header
    // Sintaxis: includeHTML('ID del contenedor', 'ruta/al/archivo.html');
    includeHTML('header-placeholder', 'header.html');
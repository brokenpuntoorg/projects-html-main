document.addEventListener('DOMContentLoaded', () => {
    const mapPlaceholder = document.getElementById('map-placeholder-unique');
    const mapLink = document.querySelector('.map-link-unique');

    // 1. Simulación de carga del mapa
    const simulateMapLoad = () => {
        setTimeout(() => {
            if (mapPlaceholder) {
                mapPlaceholder.innerHTML = `<img src="URL_IMAGEN_MAPA_DE_UBICACION.png" alt="Mapa de Ubicación de la Empresa" style="width:100%; height:100%; object-fit: cover; border-radius: 8px;">`;
            }
        }, 1000); // Simula un retraso de 1 segundo para la carga del mapa
    };

    // 2. Simulación de feedback al hacer clic en el enlace de Google Maps
    if (mapLink) {
        mapLink.addEventListener('click', (e) => {
            // No prevenimos el default para que sí abra la URL en una nueva pestaña
            console.log("Abriendo Google Maps con la dirección.");
        });
    }

    // 3. Inicialización
    simulateMapLoad();

    // NOTA: Para un mapa real, se necesitaría una API Key de Google Maps
    // y el código de inicialización:
    /* function initMap() {
        const coords = { lat: 19.6385, lng: -99.0801 }; // Coordenadas de Coacalco (ejemplo)
        const map = new google.maps.Map(mapPlaceholder, {
            zoom: 15,
            center: coords,
        });
        new google.maps.Marker({
            position: coords,
            map: map,
            title: "Sellos Vázquez"
        });
    }
    // Llamar initMap() al final del script si la API de Google Maps está cargada.
    */
});
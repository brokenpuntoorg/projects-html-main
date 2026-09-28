// ====================================================================
// SCRIPT DE INCLUSIÓN DE HTML EXTERNO Y MANEJO DEL MENÚ DESPLEGABLE
// ====================================================================

/**
 * Función para cargar e inyectar contenido HTML de un archivo externo.
 * @param {string} elementId - El ID del elemento placeholder (ej. 'header-placeholder').
 * @param {string} fileUrl - La ruta del archivo HTML (ej. 'header.html').
 * @param {function} [callback] - Función a ejecutar después de inyectar el contenido.
 */
function includeHTML(elementId, fileUrl, callback) {
    const placeholder = document.getElementById(elementId);
    if (!placeholder) {
        console.warn(`Placeholder con ID "${elementId}" no encontrado.`);
        return; 
    }

    fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                // Esto ayuda a diagnosticar si el archivo 'header.html' no existe o falla al cargarse
                throw new Error(`Error ${response.status}: No se pudo cargar el archivo ${fileUrl}`);
            }
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
            
            // 🚨 PUNTO CLAVE: Llama a la función de inicialización del menú
            // UNA VEZ que el HTML del menú está en la página (DOM).
            if (callback && typeof callback === 'function') {
                callback();
            }
        })
        .catch(error => {
            console.error(`Fallo al inyectar el componente ${fileUrl}:`, error);
            placeholder.innerHTML = `<p style="color:red;padding:10px;">Error al cargar el componente: ${fileUrl}</p>`;
        });
}


/**
 * Inicializa todos los Listeners de eventos para el menú móvil.
 * Esta función DEBE llamarse DESPUÉS de que el HTML del menú se inyecte.
 */
function initMenuListeners() {
    // 1. Obtiene las referencias de los elementos que ACABAN de ser inyectados.
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const offCanvasMenu = document.getElementById('off-canvas-menu');
    const pageOverlay = document.getElementById('page-overlay');
    const submenuToggles = document.querySelectorAll('.off-canvas-menu .submenu-toggle');
    // Asegúrate de que las referencias de búsqueda también se obtengan si existen en el header inyectado
    const searchToggle = document.getElementById('search-toggle'); 
    const mobileSearchBar = document.getElementById('mobile-search-bar'); 


    // 2. Asigna Eventos para Abrir/Cerrar el menú off-canvas (mobile)
    
    if (menuToggle && offCanvasMenu && pageOverlay) {
        menuToggle.addEventListener('click', () => {
            offCanvasMenu.classList.add('open');
            pageOverlay.style.display = 'block';
        });
    }

    if (closeMenu && offCanvasMenu && pageOverlay) {
        closeMenu.addEventListener('click', () => {
            offCanvasMenu.classList.remove('open');
            pageOverlay.style.display = 'none';
        });
    }

    if (pageOverlay && offCanvasMenu) {
        pageOverlay.addEventListener('click', () => {
            offCanvasMenu.classList.remove('open');
            pageOverlay.style.display = 'none';
        });
    }

    // 3. Asigna Eventos para el Toggle de la barra de búsqueda (Si existen)
    if (searchToggle && mobileSearchBar) {
        searchToggle.addEventListener('click', () => {
            mobileSearchBar.classList.toggle('active');
        });
    }

    // 4. Asigna Eventos para el Toggle de Submenús (La solución al problema anterior)
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parentLi = toggle.closest('li');
            const submenu = parentLi.querySelector('.submenu');

            if (submenu) {
                // Cierra cualquier otro submenú abierto
                document.querySelectorAll('.off-canvas-menu .has-submenu.active').forEach(item => {
                    if (item !== parentLi) {
                        item.classList.remove('active');
                        item.querySelector('.submenu').style.display = 'none';
                    }
                });

                // Toggle del submenú actual
                parentLi.classList.toggle('active');
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        });
    });
}


// ====================================================================
// INICIALIZACIÓN PRINCIPAL
// ====================================================================

// Llama a las funciones de inclusión cuando el DOM de la página principal esté listo.
document.addEventListener('DOMContentLoaded', () => {
    
    // 🚨 LLAMADA CLAVE PARA EL HEADER/MENÚ: 
    // Inyecta 'header.html' en 'header-placeholder' y luego ejecuta initMenuListeners.
    includeHTML('header-placeholder', 'header.html', initMenuListeners); 
    
    // (Opcional: Si también usas la inclusión para el footer)
    includeHTML('footer-placeholder', 'footer.html'); 
});
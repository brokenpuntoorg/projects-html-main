// --- MÓDULO DE DATOS DEL SURTIDO ---
const surtidoData = {
    // Surtidos 1-6 (EXISTENTES)
    pumpRepair: [
        { brand: "Chrysler", units: 2 }, { brand: "Ford", units: 6 }, 
        { brand: "General Motors", units: 11 }, { brand: "Honda", units: 18 }, 
        { brand: "Infiniti", units: 19 }, { brand: "Jaguar", units: 20 }, 
        { brand: "Mercedes-Benz", units: 20 }, { brand: "Mitsubishi", units: 20 }, 
        { brand: "Nissan", units: 21 }, { brand: "Renault", units: 22 }, 
        { brand: "Toyota", units: 23 }, { brand: "Universal", units: 25 }, 
        { brand: "Volkswagen", units: 26 }
    ],
    electricModules: [
        { brand: "Bmw", units: 30 }, { brand: "Cadillac", units: 30 }, 
        { brand: "Chrysler", units: 30 }, { brand: "Fiat", units: 49 }, 
        { brand: "Ford", units: 49 }, { brand: "General Motors", units: 77 }, 
        { brand: "Honda", units: 106 }, { brand: "Hyundai", units: 110 }, 
        { brand: "Isuzu", units: 111 }, { brand: "Kia", units: 112 }, 
        { brand: "Mazda", units: 112 }, { brand: "Mercedes-Benz", units: 113 }, 
        { brand: "Mini", units: 114 }, { brand: "Mitsubishi", units: 114 }, 
        { brand: "Nissan", units: 115 }, { brand: "Peugeot", units: 120 }, 
        { brand: "Renault", units: 120 }, { brand: "Subaru", units: 121 }, 
        { brand: "Toyota", units: 121 }, { brand: "Volkswagen", units: 125 }
    ],
    halfModules: [
        { brand: "Bmw", units: 131 }, { brand: "Chrysler", units: 131 }, 
        { brand: "Ford", units: 132 }, { brand: "Mazda", units: 133 }, 
        { brand: "General Motors", units: 133 }, { brand: "Honda", units: 133 }, 
        { brand: "Land Rover", units: 134 }, { brand: "Mazda", units: 134 }, 
        { brand: "Nissan", units: 134 }, { brand: "Toyota", units: 135 }, 
        { brand: "Volkswagen", units: 135 }
    ],
    distributors: [
        { brand: "Chrysler", units: 138 }, 
        { brand: "Ford", units: 138 }, 
        { brand: "General Motors", units: 139 }, 
        { brand: "Honda", units: 140 }, 
        { brand: "Nissan", units: 140 }, 
        { brand: "Volkswagen", units: 141 }
    ],
    sensors: [
        { brand: "Audi", units: 143 }, { brand: "Bmw", units: 143 }, 
        { brand: "Cadillac", units: 144 }, { brand: "Chrysler", units: 145 }, 
        { brand: "Ford", units: 164 }, { brand: "General Motors", units: 181 }, 
        { brand: "Honda", units: 201 }, { brand: "Hyundai", units: 205 }, 
        { brand: "Isuzu", units: 205 }, { brand: "Jaguar", units: 205 }, 
        { brand: "Kia", units: 206 }, { brand: "Mazda", units: 206 }, 
        { brand: "Mini", units: 206 }, { brand: "Mitsubishi", units: 206 }, 
        { brand: "Nissan", units: 208 }, { brand: "Peugeot", units: 216 }, 
        { brand: "Renault", units: 217 }, { brand: "Suzuki", units: 218 }, 
        { brand: "Toyota", units: 218 }, { brand: "Universal", units: 222 }, 
        { brand: "Volkswagen", units: 223 }
    ],
    ignitionCoils: [
        { brand: "Bmw", units: 234 }, { brand: "Chrysler", units: 234 }, 
        { brand: "Fiat", units: 238 }, { brand: "Ford", units: 239 }, 
        { brand: "General Motors", units: 243 }, { brand: "Honda", units: 248 }, 
        { brand: "Hyundai", units: 249 }, { brand: "Kia", units: 249 }, 
        { brand: "Isuzu", units: 250 }, { brand: "Land Rover", units: 250 }, 
        { brand: "Mazda", units: 250 }, { brand: "Mercedes-Benz", units: 251 }, 
        { brand: "Mitsubishi", units: 251 }, { brand: "Nissan", units: 253 }, 
        { brand: "Peugeot", units: 257 }, { brand: "Suzuki", units: 258 }, 
        { brand: "Toyota", units: 258 }, { brand: "Volkswagen", units: 262 }
    ],
    
    // Surtidos 7-14 (NUEVOS)
    accessories: [
        { brand: "Cadillac", units: 267 }, { brand: "Chrysler", units: 267 }, 
        { brand: "Ford", units: 270 }, { brand: "General Motors", units: 274 }, 
        { brand: "Honda", units: 278 }, { brand: "Nissan", units: 278 }, 
        { brand: "Toyota", units: 279 }, { brand: "Universal (Botes)", units: 280 }, 
        { brand: "Universal (Varios)", units: 281 }, { brand: "Volkswagen", units: 282 }
    ],
    filters: [
        { brand: "General Motors", units: 284 }, { brand: "Honda", units: 284 }, 
        { brand: "Mazda", units: 284 }, { brand: "Nissan", units: 285 }, 
        { brand: "Toyota", units: 286 }
    ],
    resistors: [
        { brand: "Chrysler", units: 288 }, { brand: "Fiat", units: 288 }, 
        { brand: "Ford", units: 288 }, { brand: "General Motors", units: 293 }, 
        { brand: "Nissan", units: 295 }, { brand: "Renault", units: 295 }, 
        { brand: "Volkswagen", units: 295 }
    ],
    kits: [
        { brand: "Chrysler", units: 298 }, { brand: "Ford", units: 298 }, 
        { brand: "General Motors", units: 314 }, { brand: "Honda", units: 320 }, 
        { brand: "Nissan", units: 320 }, { brand: "Suzuki", units: 320 }
    ],
    hangers: [
        { brand: "Chrysler", units: 322 }, { brand: "Ford", units: 322 }, 
        { brand: "General Motors", units: 325 }
    ],
    nationalFloats: [
        { brand: "Chrysler", units: 332 }, { brand: "Ford", units: 334 }, 
        { brand: "General Motors", units: 336 }, { brand: "Nissan", units: 338 }, 
        { brand: "Vam", units: 342 }, { brand: "Volkswagen", units: 344 }
    ],
    // *** NUEVO: Surtido 13 (FLOTADORES PARA AUTOS IMPORTADOS) ***
    importedFloats: [ 
        { brand: "Ford", units: 347 }, 
        { brand: "General Motors", units: 347 }, 
        { brand: "Vam", units: 348 }, 
        { brand: "Volkswagen", units: 348 }
    ],
    tractorFloats: [
        { brand: "Dina", units: 350 }, { brand: "International", units: 350 }, 
        { brand: "Irizar", units: 351 }, { brand: "Mercedes-Benz", units: 351 }, 
        { brand: "Universal", units: 351 }
    ]
};

/**
 * Genera el HTML de los elementos de lista (<li><a>) para un surtido.
 */
function generateListHtml(data, isSidebar = false) {
    let html = '';
    const totalUnits = data.reduce((total, item) => total + item.units, 0); 

    data.forEach(item => {
        const unitsStyle = isSidebar ? '' : 'style="font-weight: bold; color: #ff1e38;"';
        html += `
            <li>
                <a href="#">
                    <span>${item.brand}</span>
                    <span ${unitsStyle}>${item.units}</span>
                </a>
            </li>
        `;
    });
    
    const totalStyle = 'style="font-weight: bold; color: #1e389b;"';
    const totalBgStyle = isSidebar ? 'style="border-top: 1px solid #ddd; background-color: rgba(0, 0, 0, 0.3);"' : 'style="border-top: 1px solid #ddd; background-color: #f0f0f0;"';

    html += `
        <li ${totalBgStyle}>
            <a href="#" style="font-weight: bold; color: inherit;">
                <span>TOTAL GENERAL</span>
                <span ${totalStyle}>${totalUnits}</span>
            </a>
        </li>
    `;

    return html;
}

/**
 * Inyecta el contenido HTML en los contenedores del menú de escritorio y del menú lateral.
 */
function renderAllMenus() {
    // 1. Escritorio (Fila 1-6)
    document.getElementById('dropdownMenu1').innerHTML = generateListHtml(surtidoData.pumpRepair, false);
    document.getElementById('dropdownMenu2').innerHTML = generateListHtml(surtidoData.electricModules, false);
    document.getElementById('dropdownMenu3').innerHTML = generateListHtml(surtidoData.halfModules, false);
    document.getElementById('dropdownMenu4').innerHTML = generateListHtml(surtidoData.distributors, false);
    document.getElementById('dropdownMenu5').innerHTML = generateListHtml(surtidoData.sensors, false);
    document.getElementById('dropdownMenu6').innerHTML = generateListHtml(surtidoData.ignitionCoils, false); 

    // 2. Escritorio (Fila 7-14, incluyendo el 13)
    document.getElementById('dropdownMenu7').innerHTML = generateListHtml(surtidoData.accessories, false);
    document.getElementById('dropdownMenu8').innerHTML = generateListHtml(surtidoData.filters, false);
    document.getElementById('dropdownMenu9').innerHTML = generateListHtml(surtidoData.resistors, false);
    document.getElementById('dropdownMenu10').innerHTML = generateListHtml(surtidoData.kits, false);
    document.getElementById('dropdownMenu11').innerHTML = generateListHtml(surtidoData.hangers, false);
    document.getElementById('dropdownMenu12').innerHTML = generateListHtml(surtidoData.nationalFloats, false);
    document.getElementById('dropdownMenu13').innerHTML = generateListHtml(surtidoData.importedFloats, false); // *** NUEVO ***
    document.getElementById('dropdownMenu14').innerHTML = generateListHtml(surtidoData.tractorFloats, false);

    // 3. Sidebar (Móvil) (1-6)
    document.getElementById('sidebarDropdown1').innerHTML = generateListHtml(surtidoData.pumpRepair, true);
    document.getElementById('sidebarDropdown2').innerHTML = generateListHtml(surtidoData.electricModules, true);
    document.getElementById('sidebarDropdown3').innerHTML = generateListHtml(surtidoData.halfModules, true);
    document.getElementById('sidebarDropdown4').innerHTML = generateListHtml(surtidoData.distributors, true);
    document.getElementById('sidebarDropdown5').innerHTML = generateListHtml(surtidoData.sensors, true);
    document.getElementById('sidebarDropdown6').innerHTML = generateListHtml(surtidoData.ignitionCoils, true); 

    // 4. Sidebar (Móvil) (7-14, incluyendo el 13)
    document.getElementById('sidebarDropdown7').innerHTML = generateListHtml(surtidoData.accessories, true);
    document.getElementById('sidebarDropdown8').innerHTML = generateListHtml(surtidoData.filters, true);
    document.getElementById('sidebarDropdown9').innerHTML = generateListHtml(surtidoData.resistors, true);
    document.getElementById('sidebarDropdown10').innerHTML = generateListHtml(surtidoData.kits, true);
    document.getElementById('sidebarDropdown11').innerHTML = generateListHtml(surtidoData.hangers, true);
    document.getElementById('sidebarDropdown12').innerHTML = generateListHtml(surtidoData.nationalFloats, true);
    document.getElementById('sidebarDropdown13').innerHTML = generateListHtml(surtidoData.importedFloats, true); // *** NUEVO ***
    document.getElementById('sidebarDropdown14').innerHTML = generateListHtml(surtidoData.tractorFloats, true);
}


// --- MÓDULO DE INTERACTIVIDAD DE ESCRITORIO (CLIC) ---

/**
 * Configura la funcionalidad del menú desplegable de escritorio (control por clic).
 */
function setupDesktopDropdown(toggleId, menuId) {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    const parent = menu.closest('.dropdown-parent'); 

    if (toggle && menu) {
        // Manejador del CLIC en el enlace
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            // Cierra todos los demás menús antes de abrir este
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                if (m !== menu) m.classList.remove('active');
            });
            // Abre/cierra el menú actual
            menu.classList.toggle('active');
        });

        // Manejador del CLIC fuera del menú para cerrarlo
        document.addEventListener('click', (e) => {
            // Si el clic no fue dentro del padre (nav-item) Y el menú está abierto
            if (!parent.contains(e.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    }
}


// --- MÓDULO DE INTERACTIVIDAD MÓVIL ---

/**
 * Configura la funcionalidad de los dropdowns internos del menú lateral.
 */
function setupSidebarDropdowns() {
    const toggles = document.querySelectorAll('.sidebar-dropdown-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = toggle.getAttribute('data-target');
            const targetMenu = document.getElementById(targetId);

            if (targetMenu) {
                // Cierra los otros menús del sidebar antes de abrir este
                document.querySelectorAll('.sidebar-dropdown-menu').forEach(m => {
                    if (m !== targetMenu) m.classList.remove('open');
                });
                
                targetMenu.classList.toggle('open');
            }
        });
    });
}

/**
 * Configura la funcionalidad del menú de hamburguesa (abrir/cerrar sidebar) y el bloqueo de scroll.
 */
function setupHamburgerMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    const openBtn = document.getElementById('hamburgerButton');
    const closeBtn = document.getElementById('closeButton');
    const body = document.body; 
    
    if (!sidebar || !overlay || !openBtn || !closeBtn) return;

    const closeMenu = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll'); 
        document.querySelectorAll('.sidebar-dropdown-menu').forEach(m => m.classList.remove('open'));
    };

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        body.classList.add('no-scroll'); 
    });

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
}


// --- FUNCIÓN PRINCIPAL DE INICIALIZACIÓN ---

function init() {
    // 1. Renderizar el contenido dinámico de las 14 listas
    renderAllMenus(); 
    
    // 2. Configurar la interactividad de escritorio (CLIC) (1-6)
    setupDesktopDropdown('dropdownToggle1', 'dropdownMenu1');
    setupDesktopDropdown('dropdownToggle2', 'dropdownMenu2');
    setupDesktopDropdown('dropdownToggle3', 'dropdownMenu3');
    setupDesktopDropdown('dropdownToggle4', 'dropdownMenu4');
    setupDesktopDropdown('dropdownToggle5', 'dropdownMenu5');
    setupDesktopDropdown('dropdownToggle6', 'dropdownMenu6'); 
    
    // 3. Configurar la interactividad de escritorio (CLIC) (7-14, incluyendo el 13)
    setupDesktopDropdown('dropdownToggle7', 'dropdownMenu7');
    setupDesktopDropdown('dropdownToggle8', 'dropdownMenu8');
    setupDesktopDropdown('dropdownToggle9', 'dropdownMenu9');
    setupDesktopDropdown('dropdownToggle10', 'dropdownMenu10');
    setupDesktopDropdown('dropdownToggle11', 'dropdownMenu11');
    setupDesktopDropdown('dropdownToggle12', 'dropdownMenu12');
    setupDesktopDropdown('dropdownToggle13', 'dropdownMenu13'); // *** NUEVO ***
    setupDesktopDropdown('dropdownToggle14', 'dropdownMenu14');
    
    // 4. Configurar la interactividad del menú de hamburguesa/sidebar
    setupHamburgerMenu();
    
    // 5. Configurar la interactividad de los dropdowns internos del sidebar
    setupSidebarDropdowns();
}

// Ejecutar la inicialización
document.addEventListener('DOMContentLoaded', init);
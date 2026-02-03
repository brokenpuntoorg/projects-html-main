document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('delivery-address-input-unique');
    const clearBtn = document.getElementById('clear-search-unique');
    const suggestionsDropdown = document.getElementById('address-suggestions-unique');
    const searchForm = document.getElementById('address-search-form-unique');
    const searchButton = document.querySelector('.search-button-unique');

    // --- Datos de Sugerencias Simuladas ---
    const mockSuggestions = [
        "Av. José López Portillo, Coacalco, México",
        "Calle Juárez MZ 005, San Lorenzo Tetehlixtac",
        "El Vergel MZ 025, Morelos 1ra Sección",
        "Carnicería & Tocinería El oasis, Coacalco",
        "El Oasis, Coacalco, Méx, México"
    ];

    // --- Manejo del Botón 'Borrar' ---
    input.addEventListener('input', () => {
        const text = input.value.trim();
        clearBtn.style.display = text.length > 0 ? 'block' : 'none';
        
        // Simular sugerencias al escribir
        if (text.length > 2) {
            showSuggestions(text);
        } else {
            suggestionsDropdown.style.display = 'none';
        }
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        suggestionsDropdown.style.display = 'none';
        input.focus();
    });

    // --- Lógica de Sugerencias de Dirección ---
    const showSuggestions = (query) => {
        const filteredSuggestions = mockSuggestions.filter(s => 
            s.toLowerCase().includes(query.toLowerCase())
        );

        suggestionsDropdown.innerHTML = '';
        
        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'suggestion-item-unique';
                item.textContent = suggestion;
                
                // Manejar clic en la sugerencia
                item.addEventListener('click', () => {
                    input.value = suggestion;
                    suggestionsDropdown.style.display = 'none';
                    clearBtn.style.display = 'block';
                });
                
                suggestionsDropdown.appendChild(item);
            });
            suggestionsDropdown.style.display = 'block';
        } else {
            suggestionsDropdown.style.display = 'none';
        }
    };

    // --- Manejo de la Redirección al Buscar ---
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const address = input.value.trim();
        
        if (address) {
            // SIMULACIÓN DE REDIRECCIÓN
            // En un sitio real, aquí llamarías a una API y luego redirigirías.
            // Aquí, simplemente redirigimos a una página de resultados
            const safeAddress = encodeURIComponent(address);
            alert(`Buscando resultados para: ${address}. Redirigiendo a /resultados?dir=${safeAddress}`);
            
            // window.location.href = `/resultados?dir=${safeAddress}`;
        } else {
            alert('Por favor, ingresa una dirección de entrega.');
        }
    });

    // Ocultar sugerencias al hacer clic fuera del input
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !suggestionsDropdown.contains(e.target)) {
            suggestionsDropdown.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form-unique');
    const summaryItemsContainer = document.getElementById('summary-items-container-unique');
    const subtotalDisplay = document.getElementById('subtotal-unique');
    const totalDisplay = document.getElementById('total-unique');

    // --- Datos de Compra Simulados ---
    let subtotal = 280.00;
    const taxRate = 0.16; // 16% de IVA

    // --- Función de Renderizado del Resumen (Simulación) ---
    const renderSummary = () => {
        const tax = subtotal * taxRate;
        const total = subtotal + tax;

        // Actualizar valores en el HTML
        subtotalDisplay.textContent = `${subtotal.toFixed(2)} MXN`;
        totalDisplay.textContent = `${total.toFixed(2)} MXN`;
        document.getElementById('tax-unique').textContent = `${tax.toFixed(2)} MXN`;
    };

    // --- Validación Básica del Formulario ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const requiredInputs = form.querySelectorAll('input[required], select[required]');

        requiredInputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.border = '2px solid red';
                isValid = false;
            } else {
                input.style.border = '1px solid #ccc';
            }
        });

        if (isValid) {
            alert('Formulario de datos de envío validado. Continuando al Método de Envío y Pago...');
            // En una aplicación real, aquí enviarías los datos al servidor y actualizarías la página.
        } else {
            alert('Por favor, rellena todos los campos obligatorios (*).');
        }
    });

    // --- Inicialización ---
    renderSummary();

    // Puedes agregar más lógica aquí para:
    // 1. Manejar el botón 'Mostrar más' de los productos.
    // 2. Simular el cálculo de 'Entrega/envío' basado en la dirección.
});
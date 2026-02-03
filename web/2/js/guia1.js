document.addEventListener('DOMContentLoaded', () => {
            const filterButtons = document.querySelectorAll('.filter-button');
            const articles = document.querySelectorAll('.articles-grid .article-card');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // 1. Manejo de la clase 'active' (interacción visual)
                    const currentActive = document.querySelector('.filter-button.active');
                    if (currentActive) {
                        currentActive.classList.remove('active');
                    }
                    button.classList.add('active');

                    // 2. Lógica de Filtrado Funcional
                    
                    // Obtiene la categoría del texto del botón y la formatea (ej: "Guías y Consejos" -> "guias-y-consejos")
                    const filterValue = button.textContent.toLowerCase().replace(/á/g, 'a').replace(/\s/g, '-');

                    articles.forEach(article => {
                        // Usamos flex en lugar de block/inline para mantener el diseño CSS
                        if (filterValue === 'todos' || article.classList.contains(filterValue)) {
                            article.style.display = 'flex'; 
                        } else {
                            article.style.display = 'none';
                        }
                    });
                });
            });
        });
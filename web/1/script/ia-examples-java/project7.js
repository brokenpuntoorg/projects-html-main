document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.nav-wrapper');
    const hasDropdowns = document.querySelectorAll('.has-dropdown');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navWrapper.classList.toggle('active');
        });
    }

    hasDropdowns.forEach(item => {
        const dropdownLink = item.querySelector('a');
        if (dropdownLink) {
            dropdownLink.addEventListener('click', (e) => {
                // Solo para pantallas pequeñas
                if (window.innerWidth < 992) {
                    e.preventDefault();
                    item.classList.toggle('active');
                    const dropdownMenu = item.querySelector('.dropdown-menu');
                    if (dropdownMenu) {
                        dropdownMenu.style.display = item.classList.contains('active') ? 'block' : 'none';
                    }
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
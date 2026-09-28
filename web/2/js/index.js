document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const offCanvasMenu = document.getElementById('off-canvas-menu');
  const pageOverlay = document.getElementById('page-overlay');
  const submenuToggles = document.querySelectorAll('.off-canvas-menu .submenu-toggle');

  // Abrir menú off-canvas
  menuToggle.addEventListener('click', () => {
    offCanvasMenu.classList.add('open');
    pageOverlay.style.display = 'block';
  });

  // Cerrar menú off-canvas
  closeMenu.addEventListener('click', () => {
    offCanvasMenu.classList.remove('open');
    pageOverlay.style.display = 'none';
  });

  pageOverlay.addEventListener('click', () => {
    offCanvasMenu.classList.remove('open');
    pageOverlay.style.display = 'none';
  });

  // Toggle de submenús en el menú off-canvas
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
});

 // Toggle para la barra de búsqueda en móvil
  searchToggle.addEventListener('click', () => {
    mobileSearchBar.classList.toggle('active');
}); 
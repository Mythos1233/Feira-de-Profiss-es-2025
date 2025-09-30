document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const closeMenu = document.getElementById('closeMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            const menuContainer = document.getElementById('menuContainer');
            
            function openMenu() {
                menuContainer.classList.add('active');
                menuOverlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            
            function closeMenuFunc() {
                menuContainer.classList.remove('active');
                menuOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            menuToggle.addEventListener('click', openMenu);
            closeMenu.addEventListener('click', closeMenuFunc);
            menuOverlay.addEventListener('click', closeMenuFunc);
            
            // Fechar menu ao pressionar a tecla ESC
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeMenuFunc();
                }
            });
        });

        function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal-bottom, .reveal-left, .reveal-right, reveal-up");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // some se subir
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
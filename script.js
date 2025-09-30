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

        document.addEventListener("DOMContentLoaded", function () {
        const boxes = document.querySelectorAll('.box');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.remove('fade-in'); // Remove se quiser o "fade-out"
                }
            });
        }, {
            threshold: 0.1
        });

        boxes.forEach(box => {
            observer.observe(box);
        });
    });
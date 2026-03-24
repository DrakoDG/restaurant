const hamburger = document.querySelector('.menu-hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

// 2. Función para abrir/cerrar el menú
function toggleMenu() {
    navList.classList.toggle('show');
}

// 3. Evento para el botón hamburguesa
hamburger.addEventListener('click', toggleMenu);

// 4. Evento para que al hacer clic en un link, el menú se cierre
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Solo removemos 'show' si el menú está abierto
        if (navList.classList.contains('show')) {
            navList.classList.remove('show');
        }
    });
});

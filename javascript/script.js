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

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".category-btn");
    const items = document.querySelectorAll(".menu-item");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const targetCategory = button.getAttribute("data-target");

            items.forEach(item => {
                const itemCategory = item.getAttribute("data-category");

                if (itemCategory === targetCategory) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });
});

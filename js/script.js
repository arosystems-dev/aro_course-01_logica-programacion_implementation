/* JS (DINÁMICA DE LA APLICACIÓN)
================================ */

// CLOSE -> SIDER DE OPCIONES
document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.getElementById('sidebarMenu');
    const links = document.querySelectorAll('#sidebarMenu .nav-link');

    links.forEach(function (link) {
        link.addEventListener('click', function () {

            const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(sidebar);
            offcanvas.hide();

        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

async function loadHeader() {
    try {
        const response = await fetch('components/cabecera.html');
        const html = await response.text();
        document.getElementById('header-container').innerHTML = html;
    } catch (error) {
        console.log('Error cargando la cabecera de la página:', error);
    }
}

async function loadFooter() {
    try {
        const response = await fetch('components/pie.html');
        const html = await response.text();
        document.getElementById('footer-container').innerHTML = html;
    } catch (error) {
        console.log('Error cargando el pie de página:', error);
    }
}
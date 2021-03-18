let nav = document.getElementById('nav-barra');
let buscar = document.getElementById('btn-search');
let lupa = document.getElementById('lupa');
let cerrado = true;

function apertura() {
    if (cerrado) {
        lupa.classList.add('fondo-lupa');
        buscar.classList.remove('ocultar');
        buscar.classList.add('transcision');
        cerrado = false;
    } else {
        lupa.classList.remove('fondo-lupa');
        buscar.classList.add('ocultar');
        buscar.style.transition = '1s'
        cerrado = true;
    }
}

function menus() {
    let desplazamientoActual = window.pageYOffset;

    if (desplazamientoActual >= 300) {
        nav.style.transition = '0.5s';
        nav.classList.add('color-barra');
    } else {
        nav.classList.remove('color-barra');
        nav.style.transition = '0.5s';
    }
}

window.addEventListener('scroll', function() {
    menus();
})

lupa.addEventListener('click', function() {
    apertura();
})
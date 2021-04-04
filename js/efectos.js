let nav = document.getElementById('nav-barra');
let menu = document.getElementById('navegacion');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus() {
    let desplazamientoActual = window.pageYOffset;
    if (cerrado) {
        if (desplazamientoActual >= 300) {
            nav.style.transition = '0.5s';
            nav.classList.add('color-barra');
        } else {
            nav.classList.remove('color-barra');
            nav.style.transition = '0.5s';
        }
    }
}

function apertura() {
    let desplazamientoActual = window.pageYOffset;
    if (cerrado) {
        cerrado = false;
        menu.style.width = '100vw';
        nav.classList.add('color-barra');
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        if (desplazamientoActual < 300) {
            nav.classList.remove('color-barra');
        }
        cerrado = true;
    }
}

window.addEventListener('load', function() {
    menus();
});

window.addEventListener('scroll', function() {
    menus();
});

window.addEventListener('resize', function() {
    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function() {
    apertura();
});
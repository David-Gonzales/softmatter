const naveg = document.querySelector('#header');
if(naveg !== null){
    naveg.innerHTML = `<div id="nav-barra" class="barra">
    <a href="index.html">
        <img class="logo" src="img/logotipo02.png" alt="Logo">
    </a>

    <nav class="navegacion" id="navegacion">
        <a href="index.html" class="btn-header">Home</a>
        <a href="team.html" class="btn-header">Team</a>
        <a href="research.html" class="btn-header">Research</a>
        <a href="about.html" class="btn-header">About</a>
        <a href="contacto.html" class="btn-header">Contact</a>
    </nav>
    <div class="icon-menu" id="open"></div>
    </div>`;
}

const naveg2 = document.querySelector('.header2');
if(naveg2 !== null){
    naveg2.innerHTML = `<div id="nav-barra" class="barra color-barra color-barra2">
<a href="index.html">
    <img class="logo" src="img/logotipo02.png" alt="">
</a>

<nav class="navegacion" id="navegacion">
    <a href="index.html" class="btn-header">Home</a>
    <a href="team.html" class="btn-header">Team</a>
    <a href="research.html" class="btn-header">Research</a>
    <a href="about.html" class="btn-header">About</a>
    <a href="contacto.html" class="btn-header">Contact</a>
</nav>
<div class="icon-menu" id="open"></div>
</div>`;
}

const nav3 = document.querySelector('.header3');
if(nav3 !== null){
nav3.innerHTML = `<div id="nav-barra" class="barra color-barra color-barra2">
<a href="index.html">
    <img class="logo" src="../img/logotipo02.png" alt="">
</a>

<nav class="navegacion" id="navegacion">
    <a href="../index.html" class="btn-header">Home</a>
    <a href="../team.html" class="btn-header">Team</a>
    <a href="../research.html" class="btn-header">Research</a>
    <a href="../about.html" class="btn-header">About</a>
    <a href="../contacto.html" class="btn-header">Contact</a>
</nav>
<div class="icon-menu" id="open"></div>
</div>`;
}

const nav4 = document.querySelector('.header4');
if(nav4 !== null){
nav4.innerHTML = `<div id="nav-barra" class="barra color-barra color-barra2">
<a href="index.html">
    <img class="logo" src="../../img/logotipo02.png" alt="">
</a>

<nav class="navegacion" id="navegacion">
    <a href="../../index.html" class="btn-header">Home</a>
    <a href="../../team.html" class="btn-header">Team</a>
    <a href="../../research.html" class="btn-header">Research</a>
    <a href="../../about.html" class="btn-header">About</a>
    <a href="../../contacto.html" class="btn-header">Contact</a>
</nav>
<div class="icon-menu" id="open"></div>
</div>`;
}
const naveg = document.querySelector('#header');
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

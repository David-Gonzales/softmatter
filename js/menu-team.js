let open = document.getElementById('abrir-menu-team');
let menuTeam = document.getElementById('nav-menu-item');
let close = true;

function aperturaMenuTeam() {

  if (close) {
    close = false;
    menuTeam.style.transition = '3s';
    menuTeam.style.display = 'block';
  } else {
    close = true;
    menuTeam.style.display = 'none';
  }

}

open.addEventListener('click', function() {
  aperturaMenuTeam();
})
'use strict';

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
  sidemenu.style.right = '0';
}
function closemenu() {
  sidemenu.style.right = '-200px';
}

const icon = document.querySelector('.icon');
const logo = document.getElementById('logo');

icon.addEventListener('click', function () {
  document.body.classList.toggle('dark-Theme');
  if (document.body.classList.contains('dark-Theme')) {
    icon.src = 'moon.png';
    logo.src = 'images/logo-2.jpg';
  } else {
    icon.src = 'sun.png';
    logo.src = 'images/logo-1.jpg';
  }
});

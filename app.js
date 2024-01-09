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
const serviceEl = document.querySelectorAll('.services-list-content');
const inputEl = document.querySelectorAll('.form-input');

icon.addEventListener('click', function () {
  document.body.classList.toggle('dark-Theme');
  if (document.body.classList.contains('dark-Theme')) {
    for (let i = 0; i < serviceEl.length; i++) {
      serviceEl[i].style.backgroundColor = '#080808e1';
      serviceEl[i].style.color = '#e2d9d9f3';
      inputEl[i].style.backgroundColor = '#080808e1';
      inputEl[i].style.color = '#e2d9d9f3';
    }

    icon.src = 'moon.png';
    logo.src = 'images/logo-2.jpg';
  } else {
    icon.src = 'sun.png';
    logo.src = 'images/logo-1.jpg';
    for (let i = 0; i < serviceEl.length; i++) {
      serviceEl[i].style.backgroundColor = '#e2d9d9f3';
      serviceEl[i].style.color = '#080808e1';
      inputEl[i].style.backgroundColor = '#e2d9d9f3';
      inputEl[i].style.color = '#080808e1';
    }
  }
});

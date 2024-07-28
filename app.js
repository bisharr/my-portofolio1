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
  } else {
    icon.src = 'sun.png';

    for (let i = 0; i < serviceEl.length; i++) {
      serviceEl[i].style.backgroundColor = '#e2d9d9f3';
      serviceEl[i].style.color = '#080808e1';
      inputEl[i].style.backgroundColor = '#e2d9d9f3';
      inputEl[i].style.color = '#080808e1';
    }
  }
});
const wrokList = document.querySelector('.work-list');
const works = document.querySelectorAll('.work');
const rightIcon = document.querySelector('.right-icon');
const leftIcon = document.querySelector('.left-icon');
let currentWork = 0;
let maxWorks = works.length;

// wrokList.style.transform = 'scale(0.5)';
const Goslides = function (go) {
  works.forEach((work, i) => {
    work.style.transform = `translateX(${100 * (i - go)}%)`;
  });
};
Goslides(0);

const nextSLide = function () {
  if (currentWork === maxWorks - 1) {
    currentWork = 0;
  } else {
    currentWork++;
  }
  Goslides(currentWork);
};

const prefSilde = function () {
  if (currentWork == 0) {
    currentWork = maxWorks - 1;
  } else {
    currentWork--;
  }
  Goslides(currentWork);
};

rightIcon.addEventListener('click', nextSLide);
leftIcon.addEventListener('click', prefSilde);

document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    nextSLide();
  }
  if (e.key == 'ArrowLeft') {
    prefSilde();
  }
});

// Hover effects
const listAnchors = document.querySelectorAll('.nav-li');
const mainList = document.querySelector('.main-list');

const mouseEffect = function (e) {
  if (e.target.classList.contains('nav-li')) {
    let link = e.target;

    listAnchors.forEach((list) => {
      if (list !== link) {
        list.style.opacity = this;
      }
    });
  }
};

mainList.addEventListener('mouseover', mouseEffect.bind(0.5));
mainList.addEventListener('mouseout', mouseEffect.bind(1));

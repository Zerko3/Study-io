'use strict';

// DOM ELEMENTS

const toggleDarkModeButton = document.getElementById('btn--toggle-dark-mode');
const timer = document.querySelector(
  '.section--timer__clock--container--clock'
);
const buttons = document.querySelector(
  '.section--timer__choose__time--container'
);

const date = new Date();

// Toggle dark mode
const toggleDarkMode = function () {
  if (document.documentElement.getAttribute('data-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

// Time function
const timerCountdown = function (e) {
  const pressedButton = e.target.dataset.time;

  let min;

  if (pressedButton === '15') {
    min = 15 * 60; //get seconds from minutes
    const coundown = setInterval(function () {
      min--;
      if (min === 0) clearInterval(coundown);

      let minutes = Math.floor(min / 60); //devide back to minutes for better display on the DOM
      let seconds = min % 60; //to get seconds i need to check if there is any number left if i devide it by 60
      let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;

      timer.innerHTML = formattedTime;
    }, 1000);
  } else if (pressedButton === '25') {
    min = 25 * 60;
    const coundown = setInterval(function () {
      min--;
      if (min === 0) clearInterval(coundown);

      let minutes = Math.floor(min / 60);
      let seconds = min % 60;
      let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;

      timer.innerHTML = formattedTime;
    }, 1000);
  } else if (pressedButton === '45') {
    min = 45 * 60;
    const coundown = setInterval(function () {
      min--;
      if (min === 0) clearInterval(coundown);

      let minutes = Math.floor(min / 60);
      let seconds = min % 60;
      let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;

      timer.innerHTML = formattedTime;
    }, 1000);
  }
};

// App initialization
const init = function () {
  toggleDarkModeButton.addEventListener('click', toggleDarkMode);
  buttons.addEventListener('click', timerCountdown);
};

init();

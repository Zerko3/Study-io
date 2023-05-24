'use strict';

// DOM ELEMENTS

const toggleDarkModeButton = document.getElementById('btn--toggle-dark-mode');

// Toggle dark mode
const toggleDarkMode = function () {
  if (document.documentElement.getAttribute('data-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

const init = function () {
  toggleDarkModeButton.addEventListener('click', toggleDarkMode);
};

init();

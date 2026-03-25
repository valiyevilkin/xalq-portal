// menu.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');

  hamburgerBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
});
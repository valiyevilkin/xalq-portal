document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');

  hamburgerBtn.addEventListener('click', () => {
    // Sadece mobilde aç/kapa
    if (window.innerWidth < 1024) {
      sideMenu.classList.toggle('open');
    }
  });

  closeBtn.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
      sideMenu.classList.remove('open');
    }
  });
});
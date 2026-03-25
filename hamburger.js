document.addEventListener('DOMContentLoaded', () => {
const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

// Sadece mobil için X tuşu çalışacak
if (window.innerWidth < 1024) {
  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
}

hamburgerBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});
});
const sidebar = document.querySelector('.sidebarClose');
const menuBtn = document.querySelector('.menuButton');
const perfil = document.querySelector('.genericDiv');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebarOpen');
  sidebar.classList.toggle('menuButton2');
  sidebar.classList.toggle('imagens2');
  sidebar.classList.toggle('logo2');
  perfil.classList.toggle('definitiveDiv')
  sidebar.classList.toggle('personalText2')
})
document.addEventListener("DOMContentLoaded", function() {
  const mobileBtn = document.getElementById('mobile_btn');
  const mobileMenu = document.getElementById('mobile_menu');
  const header = document.getElementById('header');
  const icon = mobileBtn.querySelector('i');

  mobileBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    header.classList.toggle('active');
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x-lg'); // Alterna entre ícones
  });
});

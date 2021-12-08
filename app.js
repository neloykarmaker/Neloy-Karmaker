// alert("Hello! I am an alert box!!");
const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')

 menu.addEventListener('click', function() {
     menu.classList.toggle('is-active');
     menuLinks.classList.toggle('active');
 })
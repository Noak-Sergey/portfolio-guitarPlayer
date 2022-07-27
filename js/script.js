window.addEventListener('DOMContentLoaded', () => {

   const menu = document.querySelector('.nav-menu'),
    hamburger = document.querySelector('.hamburger'),
    menuItem = document.querySelectorAll('.nav-menu__list-item');

   hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('nav-menu_active');
   });

   menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })

})
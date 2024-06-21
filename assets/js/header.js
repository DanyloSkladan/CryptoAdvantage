const menuBtn = document.querySelector('.header__mobile-btn');
const menuMobile = document.querySelectorAll('.mobile__list');

menuBtn.addEventListener('click', () => {
    menuMobile.forEach(menu => {
        menu.classList.toggle('menu--open');
    });
});
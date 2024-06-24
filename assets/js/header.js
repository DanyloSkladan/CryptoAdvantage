const menuBtn = document.querySelector('.header__mobile-btn');
const menuContent = document.querySelector('.header__content--menu');

menuBtn.addEventListener('click', () => {
    menuContent.classList.toggle('menu--open');
});
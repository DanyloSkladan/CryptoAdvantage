const mobileBtn = document.querySelector('.header__mobile-btn')
const mobileMenu = document.querySelector('.header__menu-box')

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})
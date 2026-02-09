const hamburger = document.getElementById('hamburger')
const menuList = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')

    menuList.classList.toggle('active')
})
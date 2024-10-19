const btn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('menu')

function toggbeBtn() {
  btn.classList.toggle('open')
  mobileMenu.classList.toggle('hidden')
  mobileMenu.classList.toggle('flex')
}

btn.addEventListener('click', toggbeBtn)
const nav = document.querySelector('.nav')

const fixNav = () => {
  if(window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

window.addEventListener('scroll', fixNav)

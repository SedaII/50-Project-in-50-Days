const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach(b => {
  b.addEventListener('click', () => {
    b.parentNode.classList.toggle('active')
  })
})

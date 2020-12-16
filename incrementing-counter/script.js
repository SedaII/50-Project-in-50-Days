const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 200

    if(counter.hasAttribute('days') && c < target){
      counter.innerText = `${c + 1}`
      setTimeout(updateCounter, 65)
    } else if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else{
      counter.innerText = target
    }
    document.body.style.backgroundColor = "#8e44ad"

  }
  updateCounter()
  document.body.style.backgroundColor = "#8e44ad"
})

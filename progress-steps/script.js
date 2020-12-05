const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.log(progress)
let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if(currentActive > circles.length){
    currentActive = circles.length
  }

  update()

})

prev.addEventListener('click', () => {
  currentActive--

  if(currentActive < 1){
    currentActive = 1
  }

  update()

})

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && !e.shiftKey) {
    currentActive--

    if(currentActive < 1){
      currentActive = 1
    }

    update()

  } else if (e.key === 'ArrowRight' && !e.shiftKey) {
    currentActive++

    if(currentActive > circles.length){
      currentActive = circles.length
    }

    update()

  } else if(e.key === 'ArrowLeft' && e.shiftKey) {

    currentActive = 1
    update()

  }

  else if (e.key === 'ArrowRight' && e.shiftKey) {

    currentActive = 4
    update()

  }
})

function update() {
  circles.forEach((circle, idx) =>{
    if(idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width = ((actives.length-1)/(circles.length-1)) * 100 + '%'

  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}

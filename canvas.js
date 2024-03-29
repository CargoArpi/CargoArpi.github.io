const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})

class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
  }

  draw() {
    c.save()
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore()
  }

  update() {
    this.draw()
    this.x += this.velocity.x
    this.y += this.velocity.y
  }
}

let particles
function init() {
  particles = []
}

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0, 0, 0, 0.5)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  particles.forEach(particle => {
    particle.update()
  })
}

init()
animate()
addEventListener('click', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
  const particleCount = 400
  const power = 8
  const angleIncrement = Math.PI * 2 / particleCount
  for (let i = 0; i < 400; i++) {
    particles.push(new Particle(mouse.x, mouse.y, 5, 'blue', {
      x: Math.cos(angleIncrement * i) * Math.random() * power, y: Math.sin(angleIncrement * i) * Math.random() * power
    })
    )
  }
})
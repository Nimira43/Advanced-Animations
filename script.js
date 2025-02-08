const canvas = document.getElementById('canvas')
const ctx = canvas.getBoundingClientRect('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Atom {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.radius = Math.random() * 8 + 2
    this.speedX = Math.random() * 4 - 2
    this.speedY = Math.random() * 4 - 2
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this, x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}
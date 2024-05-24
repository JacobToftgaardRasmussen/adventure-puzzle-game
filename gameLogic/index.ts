import { SLEEP } from "./gameConstants"

function createGraphics() {
  let canvas = document.getElementById('GameCanvas') as HTMLCanvasElement
  let g = canvas.getContext('2d')
  if (g) {
    return g
  } else throw Error('Canvas was not found on the page')
}

function gameLoop(g: CanvasRenderingContext2D) {
  let before = Date.now()
  g.clearRect(0, 0, 600, 400)
  const currentSecond = `${new Date().getSeconds() % 9}f`
  const color = '#4433' + currentSecond
  console.log(color);
  g.fillStyle = color
  g.fillRect(0, 0, 600, 400)
  let after = Date.now()
  let frameTime = after - before
  let sleep = SLEEP - frameTime
  setTimeout(() => { gameLoop(g) }, sleep);
}

window.onload = () => {
  const g = createGraphics()
  gameLoop(g)
}
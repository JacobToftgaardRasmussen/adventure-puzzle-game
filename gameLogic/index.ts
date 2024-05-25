import { SLEEP } from "./gameConstants"
import { Map } from "./map"
import { TileCreator } from "./tileCreator"

function createGraphics() {
  let canvas = document.getElementById('GameCanvas') as HTMLCanvasElement
  let g = canvas.getContext('2d')
  if (g) {
    return g
  } else throw Error('Canvas was not found on the page')
}

function gameLoop(map: Map, g: CanvasRenderingContext2D) {
  let before = Date.now()
  g.clearRect(0, 0, 600, 400)
  map.drawItself(g)
  let after = Date.now()
  let frameTime = after - before
  let sleep = SLEEP - frameTime
  setTimeout(() => { gameLoop(map, g) }, sleep);
}

window.onload = () => {
  const g = createGraphics()
  const tileCreator = new TileCreator()
  const map = new Map(tileCreator)
  gameLoop(map, g)
}

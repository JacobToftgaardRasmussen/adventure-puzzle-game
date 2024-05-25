import { SLEEP } from "./gameConstants"
import { Left, Up, Right, Down, Input } from "./input"
import { Map } from "./map"
import { Player } from "./player"
import { TileCreator } from "./tileCreator"

let inputs: Input[] = []

function createGraphics() {
  let canvas = document.getElementById('GameCanvas') as HTMLCanvasElement
  let g = canvas.getContext('2d')
  if (g) {
    return g
  } else throw Error('Canvas was not found on the page')
}

function gameLoop(player: Player, map: Map, g: CanvasRenderingContext2D) {
  let before = Date.now()
  g.clearRect(0, 0, 600, 400)
  player.handleInputs(inputs, map)
  map.drawItself(g)
  inputs = []
  let after = Date.now()
  let frameTime = after - before
  let sleep = SLEEP - frameTime
  setTimeout(() => { gameLoop(player, map, g) }, sleep);
}

window.onload = () => {
  const g = createGraphics()
  const tileCreator = new TileCreator()
  const map = new Map(tileCreator)
  const { x, y } = map.getPositionOfUniqueTile('p')
  const player = new Player(x, y)
  gameLoop(player, map, g)
}

const LEFT_KEY = 'ArrowLeft'
const UP_KEY = 'ArrowUp'
const RIGHT_KEY = 'ArrowRight'
const DOWN_KEY = 'ArrowDown'
window.addEventListener('keyup', (e) => {
  if (e.key === LEFT_KEY || e.key === 'a') inputs.push(new Left())
  else if (e.key === UP_KEY || e.key === 'w') inputs.push(new Up())
  else if (e.key === RIGHT_KEY || e.key === 'd') inputs.push(new Right())
  else if (e.key === DOWN_KEY || e.key === 's') inputs.push(new Down())
})

import { TILE_SIZE } from "./gameConstants"
import { TileCreator } from "./tileCreator"

const rawMap: string[][] = [
  ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
  ['w', 'p', 'a', 's', 's', 'w', 'w', 'w'],
  ['w', 'r', 'w', 'b', 's', 'w', 'w', 'w'],
  ['w', 'k', 'r', 's', 's', 'w', 'w', 'w'],
  ['w', 'r', 's', 's', 's', 'l', 'a', 'w'],
  ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
]
export class Map {
  private tileCreator: TileCreator
  private map: string[][] // Update this to be Tile[][]

  constructor(tileCreator: TileCreator) {
    this.tileCreator = tileCreator
    this.map = new Array(rawMap.length)
    for (let y = 0; y < rawMap.length; y++) {
      this.map[y] = new Array(rawMap[y].length)
      for (let x = 0; x < rawMap[y].length; x++) {
        const rawValue = rawMap[y][x]
        this.map[y][x] = this.tileCreator.createTile(rawValue)
      }
    }
  }

  public drawItself(g: CanvasRenderingContext2D) {
    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        let currentTile = this.map[y][x]
        g.fillStyle = currentTile
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
      }
    }
  }
}

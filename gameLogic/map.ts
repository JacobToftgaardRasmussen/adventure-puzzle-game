import { Direction, Movement } from "./gameConstants"
import { AirTile, Tile } from "./tile"
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
  private map: Tile[][] // Update this to be Tile[][]

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
        currentTile.fallDown(this, x, y)
        currentTile.drawItselfOnTheMap(g, x, y)
      }
    }
  }

  public setTileAtPosition(x: number, y: number, tile: Tile) {
    this.map[y][x] = tile
  }

  public tileCanBeMovedTo(x: number, y: number, direction: Direction, movement: Movement): boolean {
    const tileToMoveTo = this.map[y][x]
    return tileToMoveTo.canBeMovedTo(x, y, this, direction, movement)
  }

  public getTileAtPosition(x: number, y: number) {
    return this.map[y][x]
  }

  public letTileFall(x: number, y: number, tile: Tile) {
    this.map[y][x] = new AirTile()
    this.map[y + 1][x] = tile
  }

  public getPositionOfUniqueTile(rawTileType: string) {
    for (let y = 0; y < rawMap.length; y++) {
      for (let x = 0; x < rawMap[y].length; x++) {
        if (rawMap[y][x] === rawTileType) return { x, y }
      }
    }
    throw new Error('Player was not found on the raw map')
  }
}

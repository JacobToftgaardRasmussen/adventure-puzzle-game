import { Direction, Movement, TILE_SIZE } from "./gameConstants";
import { Map } from "./map";

export interface Tile {
  respondToPlayerMovement(x: number, y: number, map: Map, movement: Movement): void
  fallDown(map: Map, x: number, y: number): void
  isAir(): boolean
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean
}

export class PlayerTile implements Tile {
  respondToPlayerMovement(x: number, y: number, map: Map, movement: Movement): void { }
  fallDown(): void { }
  isAir(): boolean { return false }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean { return false }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('playerSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class WallTile implements Tile {
  respondToPlayerMovement(x: number, y: number, map: Map, movement: Movement): void { }
  fallDown(): void { }
  isAir(): boolean { return false }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean { return false }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('wallSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class BoxTile implements Tile {
  respondToPlayerMovement(x: number, y: number, map: Map, movement: Movement): void {
    const newX = x + movement
    map.setTileAtPosition(x, y, new AirTile())
    map.setTileAtPosition(newX, y, new BoxTile())
  }
  fallDown(map: Map, x: number, y: number): void {
    if (map.getTileAtPosition(x, y + 1).isAir()) {
      map.letTileFall(x, y, this)
    }
  }
  isAir(): boolean { return false }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean {
    if (direction == Direction.Horizontal && map.getTileAtPosition(x + movement, y).isAir()) {
      return true
    } else return false
  }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('boxSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class RockTile implements Tile {
  respondToPlayerMovement(x: number, y: number, map: Map, movement: Movement): void {
    const newX = x + movement
    map.setTileAtPosition(x, y, new AirTile())
    map.setTileAtPosition(newX, y, new RockTile())
  }
  fallDown(map: Map, x: number, y: number): void {
    if (map.getTileAtPosition(x, y + 1).isAir()) {
      map.letTileFall(x, y, this)
    }
  }
  isAir(): boolean { return false }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean {
    if (direction == Direction.Horizontal && map.getTileAtPosition(x + movement, y).isAir()) {
      return true
    } else return false
  }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('rockSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class SandTile implements Tile {
  respondToPlayerMovement(x: number, y: number, map: Map, movement: Movement): void { }
  fallDown(): void { }
  isAir(): boolean { return false }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean { return true }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('sandSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class LockTile implements Tile {
  respondToPlayerMovement(x: number, y: number, map: Map, movement: Movement): void { }
  fallDown(): void { }
  isAir(): boolean { return false }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean { return false }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('lockSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class KeyTile implements Tile {
  respondToPlayerMovement(_x: number, _y: number, map: Map, movement: Movement): void {
    const { x, y } = map.getPositionOfUniqueTile('l')
    map.setTileAtPosition(x, y, new AirTile())
  }
  fallDown(): void { }
  isAir(): boolean { return false }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean { return true }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('keySprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class AirTile implements Tile {
  respondToPlayerMovement(x: number, y: number, map: Map, movement: Movement): void { }
  fallDown(): void { }
  isAir(): boolean { return true }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean { return true }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = '#fff'
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

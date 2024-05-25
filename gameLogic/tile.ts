import { Direction, Movement, TILE_SIZE } from "./gameConstants";
import { Map } from "./map";

export interface Tile {
  fallDown(map: Map, x: number, y: number): void
  isAir(): boolean
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean
}

export class PlayerTile implements Tile {
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
  fallDown(): void { }
  isAir(): boolean { return true }
  canBeMovedTo(x: number, y: number, map: Map, direction: Direction, movement: Movement): boolean { return true }
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = '#fff'
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

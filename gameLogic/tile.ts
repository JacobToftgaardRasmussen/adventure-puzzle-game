import { TILE_SIZE } from "./gameConstants";

export interface Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void
}

export class PlayerTile implements Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('playerSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class WallTile implements Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('wallSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class BoxTile implements Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('boxSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class RockTile implements Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('rockSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class SandTile implements Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('sandSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class LockTile implements Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('lockSprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class KeyTile implements Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    const sprite = document.getElementById('keySprite') as CanvasImageSource
    if (sprite)
      g.drawImage(sprite, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

export class AirTile implements Tile {
  drawItselfOnTheMap(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = '#fff'
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  }
}

const TILE_SIZE = 60
const FPS = 30
const SLEEP = 1000 / FPS

enum Direction {
  Horizontal,
  Vertical
}

type Movement = 1 | -1

export { Movement, Direction, TILE_SIZE, SLEEP }

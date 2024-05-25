import { Direction, Movement } from './gameConstants'

export interface Input {
  movement: Movement
  direction: Direction
}

export class Right implements Input {
  constructor(public movement: 1 = 1, public direction: Direction = Direction.Horizontal) { }
}

export class Left implements Input {
  constructor(public movement: -1 = -1, public direction: Direction = Direction.Horizontal) { }
}

export class Up implements Input {
  constructor(public movement: -1 = -1, public direction: Direction = Direction.Vertical) { }
}

export class Down implements Input {
  constructor(public movement: 1 = 1, public direction: Direction = Direction.Vertical) { }
}

import { Direction } from "./gameConstants";
import { Input } from "./input";
import { Map } from "./map";
import { AirTile, PlayerTile } from "./tile";

export class Player {
  constructor(private x: number, private y: number) { }

  public handleInputs(inputs: Input[], map: Map) {
    while (inputs.length > 0) {
      let input = inputs.pop()
      if (input) {
        this.handleInput(input, map)
      }
    }
  }

  private handleInput(input: Input, map: Map) {
    const newX = input.direction === Direction.Horizontal ? this.x + input.movement : this.x
    const newY = input.direction === Direction.Vertical ? this.y + input.movement : this.y

    if (map.tileCanBeMovedTo(newX, newY, input.direction, input.movement)) {
      map.setTileAtPosition(this.x, this.y, new AirTile())
      map.updateTileToMoveTo(newX, newY, input.movement)
      this.setNewPosition(newX, newY)
      map.setTileAtPosition(this.x, this.y, new PlayerTile())
    }
  }

  private setNewPosition(newX: number, newY: number) {
    this.x = newX
    this.y = newY
  }
}

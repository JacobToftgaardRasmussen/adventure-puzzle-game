import { AirTile, PlayerTile, WallTile, BoxTile, SandTile, RockTile, LockTile, KeyTile } from "./tile"

export class TileCreator {
  public constructor() { }
  createTile(type: string) {
    if (type === 'a') return new AirTile()
    if (type === 'p') return new PlayerTile()
    if (type === 'w') return new WallTile()
    if (type === 'b') return new BoxTile()
    if (type === 's') return new SandTile()
    if (type === 'r') return new RockTile()
    if (type === 'l') return new LockTile()
    if (type === 'k') return new KeyTile()
    else return new AirTile()
  }
}

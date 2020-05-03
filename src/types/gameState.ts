interface IEntity {
  id: number;
  entityId: string;
  shrinking?: boolean;
}

interface IStaticEntity extends IEntity {}

interface IMovableEntity extends IEntity {
  color?:
    | '#ff0000'
    | '#FF8C00'
    | '#FFFF00'
    | '#008000'
    | '#0000FF'
    | '#800080'
    | '#8B4513'
    | '#FFE4E1';
  fading?: boolean;
  stuck?: boolean;
}

interface ITileData {
  staticEntity: IStaticEntity | null;
  movableEntity: IMovableEntity | null;
}

type IGameState = ITileData[][];

export default IGameState;

interface IEntity {
  id: number;
  entityId: string;
}

interface IStaticEntity extends IEntity {}

interface IMovableEntity extends IEntity {
  color?: '#ff0000' | '#FF8C00' | '#FFFF00';
  fading?: boolean;
}

interface ITileData {
  staticEntity: IStaticEntity | null;
  movableEntity: IMovableEntity | null;
}

type IGameState = ITileData[][];

export default IGameState;

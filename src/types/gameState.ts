interface IEntity {
  id: number;
  entityId: string;
}

interface IStaticEntity extends IEntity {}

interface IMovableEntity extends IEntity {
  color?: '#e6799b' | '#eca943' | '#645a50';
  fading?: boolean;
}

interface ITileData {
  staticEntity: IStaticEntity | null;
  movableEntity: IMovableEntity | null;
}

type IGameState = ITileData[][];

export default IGameState;

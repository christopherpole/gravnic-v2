interface IEntity {
  id: number;
  entityId: string;
}

interface IStaticEntity extends IEntity {}

interface IMovableEntity extends IEntity {
  color?: string;
}

interface ITileData {
  staticEntity: IStaticEntity | null;
  movableEntity: IMovableEntity | null;
}

type IGameState = ITileData[][];

export default IGameState;

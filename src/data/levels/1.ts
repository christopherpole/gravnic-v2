import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 9],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 1 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 4 },
        movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 3 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

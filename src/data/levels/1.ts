import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 9],
  gameState: [
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 1 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      { staticEntity: { entityId: 'BLACK_HOLE', id: 4 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 7 },
        movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 6 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
    ],
  ],
};

export default levelData;

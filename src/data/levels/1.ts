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
      { staticEntity: { entityId: 'STICKY_SPOT', id: 4 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 13 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 16 },
        movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 15 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
    ],
  ],
};

export default levelData;

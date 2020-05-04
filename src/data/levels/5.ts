import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [3, 4, 6],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 1 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 5 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 4 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 9 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 8 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 11 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 10 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 13 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 17 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 16 },
      },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

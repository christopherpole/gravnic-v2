import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 3],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 1 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 3 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 2 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 4 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 8 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 7 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 10 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 9 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 12 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 11 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 13 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 17 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 16 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 19 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 18 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 22 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 24 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 23 },
      },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

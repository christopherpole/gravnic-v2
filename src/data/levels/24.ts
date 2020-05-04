import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [5, 7, 8],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 1 },
      },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 4 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 3 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 6 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 5 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 11 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 10 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 13 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 15 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 14 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 17 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 16 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 18 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 19 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

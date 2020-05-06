import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [3, 5, 7],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 1 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 4 },
        movableEntity: { entityId: 'GLASS', id: 3 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 7 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 6 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 9 },
        movableEntity: { entityId: 'GLASS', id: 8 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 14 },
        movableEntity: { entityId: 'GLASS', id: 13 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 16 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 15 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 18 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 20 },
        movableEntity: { entityId: 'GLASS', id: 19 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 22 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 21 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 24 },
        movableEntity: { entityId: 'GLASS', id: 23 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 26 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 25 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

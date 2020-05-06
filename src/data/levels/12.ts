import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 8],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 1 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 4 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 7 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 6 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 13 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 12 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 15 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 14 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 18 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 19 }, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 22 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 24 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 23 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 26 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 25 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 28 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 27 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

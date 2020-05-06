import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [5, 6, 8],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 1 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 3 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 2 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 5 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 4 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 8 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 7 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 10 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 9 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 13 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 16 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 15 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 18 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 17 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 20 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 19 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

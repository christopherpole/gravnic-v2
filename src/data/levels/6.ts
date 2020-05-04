import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [2, 4, 5],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 1 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 4 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 3 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 7 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 6 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 9 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 8 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 14 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 13 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 18 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 17 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 20 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 19 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

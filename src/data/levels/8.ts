import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 7],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 1 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 5 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 4 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 11 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 10 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 13 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 12 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 17 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 16 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 19 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 18 },
      },
    ],
  ],
};

export default levelData;

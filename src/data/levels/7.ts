import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [3, 5, 7],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 1 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 4 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 3 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 11 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 10 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 13 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 12 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 19 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 18 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 23 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 22 },
      },
    ],
  ],
};

export default levelData;

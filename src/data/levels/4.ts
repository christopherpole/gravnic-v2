import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  id: '4',
  stars: {
    1: 2,
    2: 3,
    3: 5,
  },
  gameState: [
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 1 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 4 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 3 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 8 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 7 },
      },
      { staticEntity: null, movableEntity: null },
    ],
    [
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
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 14 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 19 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 18 },
      },
    ],
  ],
};

export default levelData;

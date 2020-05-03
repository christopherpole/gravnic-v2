import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 3],
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
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 4 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 7 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 6 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 13 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 16 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 15 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 18 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 20 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 19 },
      },
    ],
  ],
};

export default levelData;

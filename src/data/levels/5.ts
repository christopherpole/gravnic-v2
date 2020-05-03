import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 3],
  gameState: [
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 1 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 5 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 4 },
      },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 10 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 9 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 13 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 15 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 14 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
    ],
  ],
};

export default levelData;

import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [3, 4, 6],
  gameState: [
    [
      { staticEntity: { entityId: 'FLOOR', id: 1 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 3 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 2 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 4 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 6 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 5 },
      },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 13 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 12 },
      },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 15 },
        movableEntity: { entityId: 'GLASS', id: 14 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 18 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 17 },
      },
    ],
  ],
};

export default levelData;

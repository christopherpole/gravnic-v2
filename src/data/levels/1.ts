import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 3],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'GLASS', id: 1 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 4 },
        movableEntity: { entityId: 'GLASS', id: 3 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 6 },
        movableEntity: { entityId: 'GLASS', id: 5 },
      },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 12 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 11 },
      },
    ],
  ],
};

export default levelData;

import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  id: '2',
  stars: [1, 2, 3],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 1 },
      },
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
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 10 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 9 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 12 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 11 },
      },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

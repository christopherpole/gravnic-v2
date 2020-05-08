import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  tutorial: 'INTRO',
  stars: [2, 4, 6],
  gameState: [
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 1 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: { entityId: 'FLOOR', id: 4 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 7 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 6 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 9 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 8 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 14 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 13 },
      },
    ],
  ],
};

export default levelData;

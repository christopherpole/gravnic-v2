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
      { staticEntity: null, movableEntity: null },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 9 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 8 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 11 },
        movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 10 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 14 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 13 },
      },
    ],
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 16 },
        movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 15 },
      },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

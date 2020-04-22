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
        movableEntity: { entityId: 'BLOCK', color: '#eca943', id: 1 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 4 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 9 },
        movableEntity: { entityId: 'BLOCK', color: '#e6799b', id: 8 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 11 },
        movableEntity: { entityId: 'BLOCK', color: '#e6799b', id: 10 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 13 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 18 },
        movableEntity: { entityId: 'BLOCK', color: '#645a50', id: 17 },
      },
    ],
  ],
};

export default levelData;

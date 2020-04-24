import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  id: '1',
  stars: {
    1: 2,
    2: 3,
    3: 5,
  },
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#645a50', id: 1 },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 4 },
        movableEntity: { entityId: 'BLOCK', color: '#645a50', id: 3 },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 6 },
        movableEntity: { entityId: 'BLOCK', color: '#eca943', id: 5 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
      { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 10 },
        movableEntity: { entityId: 'BLOCK', color: '#eca943', id: 9 },
      },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

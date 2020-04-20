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
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'BLOCK', color: '#e6799b', id: 1 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 5 },
        movableEntity: { entityId: 'BLOCK', color: '#e6799b', id: 4 },
      },
    ],
  ],
};

export default levelData;

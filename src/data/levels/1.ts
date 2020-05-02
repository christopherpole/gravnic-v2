import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  stars: [1, 2, 3],
  gameState: [
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: { entityId: 'RAINBOW_BLOCK', id: 1 },
      },
      { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 5 },
        movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 4 },
      },
    ],
  ],
};

export default levelData;

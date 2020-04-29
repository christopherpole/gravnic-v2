import ILevelData from '@/types/levelData';

const levelData: ILevelData = {
  id: '3',
  stars: [2, 3, 5],
  gameState: [
    [
      { staticEntity: null, movableEntity: null },
      {
        staticEntity: { entityId: 'FLOOR', id: 2 },
        movableEntity: {
          entityId: 'BLOCK',
          color: '#ff0000',
          id: 1,
        },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 3 },
        movableEntity: null,
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 5 },
        movableEntity: {
          entityId: 'BLOCK',
          color: '#FF8C00',
          id: 4,
        },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 7 },
        movableEntity: {
          entityId: 'BLOCK',
          id: 6,
          color: '#FFFF00',
        },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 8 },
        movableEntity: null,
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 9 },
        movableEntity: null,
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 10 },
        movableEntity: null,
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 11 },
        movableEntity: null,
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 12 },
        movableEntity: null,
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 13 },
        movableEntity: null,
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 15 },
        movableEntity: {
          entityId: 'BLOCK',
          color: '#FFFF00',
          id: 14,
        },
      },
    ],
    [
      {
        staticEntity: { entityId: 'FLOOR', id: 17 },
        movableEntity: {
          entityId: 'BLOCK',
          color: '#ff0000',
          id: 16,
        },
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 18 },
        movableEntity: null,
      },
      {
        staticEntity: { entityId: 'FLOOR', id: 20 },
        movableEntity: {
          entityId: 'BLOCK',
          color: '#FF8C00',
          id: 19,
        },
      },
      { staticEntity: null, movableEntity: null },
    ],
  ],
};

export default levelData;

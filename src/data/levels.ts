import ILevelData from '@/types/levelData';

const levels: ILevelData[] = [
  {
    id: 1,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: {
            entityId: 'BLOCK',
            color: '#e6799b',
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
            color: '#eca943',
            id: 4,
          },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 7 },
          movableEntity: {
            entityId: 'BLOCK',
            color: '#645a50',
            id: 6,
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
            color: '#645a50',
            id: 14,
          },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 17 },
          movableEntity: {
            entityId: 'BLOCK',
            color: '#e6799b',
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
            color: '#eca943',
            id: 19,
          },
        },
        { staticEntity: null, movableEntity: null },
      ],
    ],
  },
  {
    id: 2,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 3,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 4,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 5,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 6,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 7,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 8,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 9,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 10,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 11,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 12,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 13,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 14,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
  {
    id: 15,
    stars: {
      1: 2,
      2: 3,
      3: 5,
    },
    gameState: [
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 2 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 1 },
        },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 4 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 3 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        { staticEntity: null, movableEntity: null },
      ],
      [
        { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 11 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 10 },
        },
      ],
      [
        {
          staticEntity: { entityId: 'FLOOR', id: 13 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 14 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 15 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 16 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 17 }, movableEntity: null },
      ],
      [
        { staticEntity: null, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 19 },
          movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 18 },
        },
        { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
        { staticEntity: { entityId: 'FLOOR', id: 21 }, movableEntity: null },
        {
          staticEntity: { entityId: 'FLOOR', id: 23 },
          movableEntity: { entityId: 'BLOCK', color: '#800080', id: 22 },
        },
      ],
    ],
  },
];

export default levels;

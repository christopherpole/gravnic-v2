import IGameState from '@/types/gameState';

//  Swiping
export const SWIPE_VELOCITY_THRESHOLD = 0.3;
export const DIRECTIONAL_OFFSET_THRESHOLD = 80;

//  Game renderer
export const MAX_ENTITIES_COUNT = 1000;
export const ENTITY_MOVE_SPEED = 20;
export const ENTITY_SIZE = 100;
// export const GAME_STATE: IGameState = [
//   [
//     { staticEntity: { entityId: 'FLOOR', id: 1 }, movableEntity: null },
//     {
//       staticEntity: { entityId: 'FLOOR', id: 3 },
//       movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 2 },
//     },
//     { staticEntity: { entityId: 'FLOOR', id: 4 }, movableEntity: null },
//   ],
// ];

export const GAME_STATE: IGameState = [
  [
    { staticEntity: { entityId: 'FLOOR', id: 1 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 2 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 5 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 4 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 7 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 6 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 9 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 8 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 11 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 10 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 13 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 12 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 15 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 14 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 17 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 16 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 18 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 19 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 20 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 22 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 21 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 24 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 23 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 26 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 25 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 28 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 27 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 30 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 29 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 32 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 31 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 34 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 33 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 35 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 36 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 37 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 39 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 38 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 41 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 40 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 43 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 42 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 45 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 44 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 47 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 46 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 49 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 48 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 51 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 50 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 52 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 53 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 54 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 56 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 55 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 58 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 57 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 60 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 59 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 62 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 61 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 64 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 63 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 66 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 65 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 68 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 67 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 69 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 70 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 71 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 73 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 72 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 75 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 74 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 77 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 76 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 79 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 78 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 81 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 80 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 83 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 82 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 85 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 84 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 86 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 87 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 88 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 90 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 89 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 92 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 91 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 94 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 93 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 96 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 95 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 98 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 97 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 100 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 99 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 102 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 101 },
    },
  ],
  [
    {
      staticEntity: { entityId: 'FLOOR', id: 103 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 104 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 105 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 107 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 106 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 109 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 108 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 111 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 110 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 113 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 112 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 115 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 114 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 117 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 116 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 119 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 118 },
    },
  ],
  [
    {
      staticEntity: { entityId: 'FLOOR', id: 120 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 121 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 122 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 123 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 124 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 125 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 126 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 127 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 128 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 129 },
      movableEntity: null,
    },
  ],
  [
    {
      staticEntity: { entityId: 'FLOOR', id: 130 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 131 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 132 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 133 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 134 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 135 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 136 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 137 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 138 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 139 },
      movableEntity: null,
    },
  ],
  [
    {
      staticEntity: { entityId: 'FLOOR', id: 140 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 141 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 142 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 143 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 144 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 145 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 146 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 147 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 148 },
      movableEntity: null,
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 149 },
      movableEntity: null,
    },
  ],
];

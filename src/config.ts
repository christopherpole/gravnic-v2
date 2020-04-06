import IGameState from '@/types/gameState';

export const ENTITY_MOVE_SPEED = 10;
export const ENTITY_SIZE = 100;
export const GAME_STATE: IGameState = [
  [
    { staticEntity: { entityId: 'FLOOR', id: 1 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 2 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 4 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 7 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 13 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 12 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 15 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 14 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 17 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 16 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 19 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 18 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 21 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 20 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 23 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 22 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 25 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 24 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 27 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 26 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 29 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 28 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 30 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 32 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 31 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 34 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 33 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 36 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 35 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 38 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 37 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 40 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 39 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 42 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 41 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 44 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 43 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 46 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 45 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 48 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 47 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 49 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 51 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 50 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 53 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 52 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 55 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 54 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 57 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 56 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 59 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 58 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 61 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 60 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 63 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 62 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 65 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 64 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 67 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 66 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 68 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 70 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 69 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 72 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 71 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 74 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 73 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 76 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 75 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 78 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 77 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 80 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 79 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 82 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 81 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 84 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 83 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 86 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 85 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 87 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 89 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 88 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 91 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 90 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 93 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 92 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 95 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 94 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 97 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 96 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 99 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 98 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 101 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 100 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 103 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 102 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 105 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 104 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 106 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 108 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 107 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 110 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 109 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 112 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 111 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 114 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 113 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 116 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 115 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 118 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 117 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 120 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 119 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 122 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 121 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 124 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 123 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 125 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 127 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 126 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 129 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 128 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 131 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 130 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 133 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 132 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 135 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 134 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 137 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 136 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 139 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 138 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 141 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 140 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 143 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 142 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 144 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 146 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 145 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 148 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 147 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 150 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 149 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 152 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 151 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 154 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 153 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 156 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 155 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 158 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 157 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 160 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 159 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 162 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 161 },
    },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 163 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 165 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 164 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 167 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 166 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 169 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 168 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 171 },
      movableEntity: { entityId: 'BLOCK', color: '#8B4513', id: 170 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 173 },
      movableEntity: { entityId: 'BLOCK', color: '#0000FF', id: 172 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 175 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 174 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 177 },
      movableEntity: { entityId: 'BLOCK', color: '#FF8C00', id: 176 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 179 },
      movableEntity: { entityId: 'BLOCK', color: '#800080', id: 178 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 181 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 180 },
    },
  ],
];

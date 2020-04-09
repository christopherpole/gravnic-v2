import IGameState from '@/types/gameState';

//  Swiping
export const SWIPE_VELOCITY_THRESHOLD = 0.3;
export const DIRECTIONAL_OFFSET_THRESHOLD = 80;

//  Game renderer
export const MAX_ENTITIES_COUNT = 1000;
export const ENTITY_SIZE = 100;
export const ENTITY_MOVE_SPEED = 5;
export const ENTITY_FADE_SPEED = 2.5; //  Lower is slower relative to move speed

//  Test data
export const GAME_STATE: IGameState = [
  [
    {
      staticEntity: { entityId: 'FLOOR', id: 2 },
      movableEntity: { entityId: 'BLOCK', color: '#008000', id: 1 },
    },
    {
      staticEntity: { entityId: 'FLOOR', id: 4 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 3 },
    },
    { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 6 }, movableEntity: null },
  ],
  [
    {
      staticEntity: { entityId: 'FLOOR', id: 8 },
      movableEntity: { entityId: 'BLOCK', color: '#FFFF00', id: 7 },
    },
    { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 12 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 11 },
    },
  ],
];

import ILevelData from './types/levelData';

//  Swiping
export const SWIPE_VELOCITY_THRESHOLD = 0.3;
export const DIRECTIONAL_OFFSET_THRESHOLD = 80;

//  Game renderer
export const MAX_ENTITIES_COUNT = 1000;
export const ENTITY_SIZE = 120;
export const ENTITY_MOVE_SPEED = 20;
export const ENTITY_FADE_SPEED = 5; //  Lower is slower relative to move speed
export const UNDOING_SPEED_MULTIPLIER = 2; //  Multiply other animation speeds with this number when undoing

//  Test data
export const TEST_LEVEL: ILevelData = {
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
};

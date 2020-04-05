import IGameState from '@/types/gameState';

export const ENTITIES_DATA: IGameState = [
  [
    { staticEntity: null, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 1 }, movableEntity: null },
    { staticEntity: null, movableEntity: null },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 2 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 3 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 4 }, movableEntity: null },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 5 }, movableEntity: null },
    {
      staticEntity: { entityId: 'FLOOR', id: 7 },
      movableEntity: { entityId: 'BLOCK', color: '#ff0000', id: 6 },
    },
    { staticEntity: { entityId: 'FLOOR', id: 8 }, movableEntity: null },
  ],
  [
    { staticEntity: { entityId: 'FLOOR', id: 9 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 10 }, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 11 }, movableEntity: null },
  ],
  [
    { staticEntity: null, movableEntity: null },
    { staticEntity: { entityId: 'FLOOR', id: 12 }, movableEntity: null },
    { staticEntity: null, movableEntity: null },
  ],
];

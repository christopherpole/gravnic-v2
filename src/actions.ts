import { changeGravityDirection } from 'gravnic-game';
import IGameState from '@/types/gameState';
import IState from '@/types/state';
//  @ts-ignore - what's wrong with this??
import { swipeDirections } from 'react-native-swipe-gestures';

export const MAKE_MOVE = 'MAKE_MOVE';
export const SET_ENTITIES_MOVING = 'SET_ENTITIES_MOVING';
export const RESET_LEVEL = 'RESET_LEVEL';
export const SET_LEVEL_LOADED = 'SET_LEVEL_LOADED';
export const SET_UNDOING = 'SET_UNDOING';

export interface IMakeMove {
  type: typeof MAKE_MOVE;
  payload: {
    newGameStates: IGameState[];
  };
}
export interface ISetEntitiesMoving {
  type: typeof SET_ENTITIES_MOVING;
  payload: {
    entitiesMoving: boolean;
  };
}
export interface IResetLevel {
  type: typeof RESET_LEVEL;
}
export interface ISetLevelLoaded {
  type: typeof SET_LEVEL_LOADED;
  payload: {
    levelLoaded: boolean;
  };
}
export interface ISetUndoing {
  type: typeof SET_UNDOING;
  payload: {
    undoing: boolean;
  };
}

export type IAction =
  | IMakeMove
  | ISetEntitiesMoving
  | IResetLevel
  | ISetLevelLoaded
  | ISetUndoing;

export const makeMove = (
  swipeDirection:
    | swipeDirections.SWIPE_UP
    | swipeDirections.SWIPE_RIGHT
    | swipeDirections.SWIPE_DOWN
    | swipeDirections.SWIPE_LEFT,
) => (dispatch: (action: IMakeMove) => void, getState: () => IState) => {
  const { gameStateHistory, entitiesMoving } = getState();
  let direction;

  //  Don't allow the move if entities are already being animated
  if (entitiesMoving) {
    return;
  }

  //  Determine which direction we want to move in
  switch (swipeDirection) {
    case swipeDirections.SWIPE_UP:
      direction = 'MOVE_UP';
      break;
    case swipeDirections.SWIPE_RIGHT:
      direction = 'MOVE_RIGHT';
      break;
    case swipeDirections.SWIPE_DOWN:
      direction = 'MOVE_DOWN';
      break;
    case swipeDirections.SWIPE_LEFT:
      direction = 'MOVE_LEFT';
      break;
    default:
  }

  //  Calculate the latest game state from the given direction
  const lastMove = gameStateHistory[gameStateHistory.length - 1];
  const newGameStates = changeGravityDirection(
    lastMove[lastMove.length - 1],
    direction,
  );

  //  Dispatch the action if there is some sort of update
  if (newGameStates.length > 1) {
    dispatch({
      type: MAKE_MOVE,
      payload: {
        newGameStates,
      },
    });
  }
};

export const setEntitiesMoving = (
  entitiesMoving: boolean,
): ISetEntitiesMoving => ({
  type: SET_ENTITIES_MOVING,
  payload: {
    entitiesMoving,
  },
});

export const resetLevel = (): IResetLevel => ({
  type: RESET_LEVEL,
});

export const setLevelLoaded = (levelLoaded: boolean): ISetLevelLoaded => ({
  type: SET_LEVEL_LOADED,
  payload: {
    levelLoaded,
  },
});

export const setUndoing = (undoing: boolean): ISetUndoing => ({
  type: SET_UNDOING,
  payload: {
    undoing,
  },
});

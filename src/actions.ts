import { changeGravityDirection } from 'gravnic-game';
import IGameState from '@/types/gameState';
import IState from '@/types/state';
//  @ts-ignore - what's wrong with this??
import { swipeDirections } from 'react-native-swipe-gestures';

export const MAKE_MOVE = 'MAKE_MOVE';
export const SET_ENTITIES_MOVING = 'SET_ENTITIES_MOVING';

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

export type IAction = IMakeMove | ISetEntitiesMoving;

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

  //  Dispatch the action
  dispatch({
    type: MAKE_MOVE,
    payload: {
      newGameStates,
    },
  });
};

export const setEntitiesMoving = (entitiesMoving: boolean) => ({
  type: SET_ENTITIES_MOVING,
  payload: {
    entitiesMoving,
  },
});

import { changeGravityDirection } from 'gravnic-game';
import IGameState from '@/types/gameState';
import IState from '@/types/state';
//  @ts-ignore - what's wrong with this??
import { swipeDirections } from 'react-native-swipe-gestures';

export const MAKE_MOVE = 'MAKE_MOVE';

export interface IMakeMove {
  type: typeof MAKE_MOVE;
  payload: {
    gameState: IGameState;
  };
}

export type IAction = IMakeMove;

export const makeMove = (
  swipeDirection:
    | swipeDirections.SWIPE_UP
    | swipeDirections.SWIPE_RIGHT
    | swipeDirections.SWIPE_DOWN
    | swipeDirections.SWIPE_LEFT,
) => (dispatch: (action: IMakeMove) => void, getState: () => IState) => {
  const { gameState } = getState();
  let direction;

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
  const newGameStates = changeGravityDirection(gameState, direction);
  const lastGameState = newGameStates[newGameStates.length - 1];

  //  Dispatch the action
  dispatch({
    type: MAKE_MOVE,
    payload: {
      gameState: lastGameState,
    },
  });
};

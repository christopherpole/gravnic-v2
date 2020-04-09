import { GAME_STATE } from '@/config';

import IState from '@/types/state';
import { MAKE_MOVE, SET_ENTITIES_MOVING, IAction } from '@/actions';

const initialState = {
  gameStateHistory: [[GAME_STATE]],
  entitiesMoving: false,
};

const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case MAKE_MOVE: {
      return {
        ...state,
        gameStateHistory: [
          ...state.gameStateHistory,
          action.payload.newGameStates,
        ],
        entitiesMoving: true,
      };
    }

    case SET_ENTITIES_MOVING: {
      return {
        ...state,
        entitiesMoving: action.payload.entitiesMoving,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

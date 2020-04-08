import { GAME_STATE } from '@/config';

import IState from '@/types/state';
import { MAKE_MOVE, IAction } from '@/actions';

const initialState = {
  gameStateHistory: [[GAME_STATE]],
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
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;

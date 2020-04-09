import { GAME_STATE } from '@/config';

import IState from '@/types/state';
import {
  MAKE_MOVE,
  SET_ENTITIES_MOVING,
  RESET_LEVEL,
  IAction,
  SET_LEVEL_LOADED,
} from '@/actions';

const initialState = {
  gameStateHistory: [[GAME_STATE]],
  entitiesMoving: false,
  levelLoaded: false,
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

    case RESET_LEVEL: {
      return {
        ...state,
        gameStateHistory: initialState.gameStateHistory,
        levelLoaded: false,
        entitiesMoving: false,
      };
    }

    case SET_LEVEL_LOADED: {
      return {
        ...state,
        levelLoaded: action.payload.levelLoaded,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

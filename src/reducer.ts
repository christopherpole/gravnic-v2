import levelsData from '@/data/levels';
import IState from '@/types/state';
import {
  MAKE_MOVE,
  SET_ENTITIES_MOVING,
  RESET_LEVEL,
  SET_LEVEL_LOADED,
  SET_UNDOING,
  SET_SELECTED_LEVEL_ID,
  IAction,
} from '@/actions';

const initialState = {
  gameStateHistory: [[levelsData[0].gameState]],
  entitiesMoving: false,
  levelLoaded: false,
  undoing: false,
  selectedLevelId: '1',
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
      let { gameStateHistory } = state;
      const { undoing } = state;

      if (undoing && gameStateHistory.length > 1) {
        gameStateHistory = [
          ...gameStateHistory.slice(0, gameStateHistory.length - 1),
        ];
      }

      return {
        ...state,
        gameStateHistory,
        entitiesMoving: action.payload.entitiesMoving,
        undoing: false,
      };
    }

    case RESET_LEVEL: {
      return {
        ...state,
        gameStateHistory: initialState.gameStateHistory,
        levelLoaded: false,
        entitiesMoving: false,
        undoing: false,
      };
    }

    case SET_LEVEL_LOADED: {
      return {
        ...state,
        levelLoaded: action.payload.levelLoaded,
      };
    }

    case SET_UNDOING: {
      const undoing =
        !state.entitiesMoving && state.gameStateHistory.length > 1
          ? action.payload.undoing
          : state.undoing;

      return {
        ...state,
        undoing,
      };
    }

    case SET_SELECTED_LEVEL_ID: {
      return {
        ...state,
        selectedLevelId: action.payload.selectedLevelId,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

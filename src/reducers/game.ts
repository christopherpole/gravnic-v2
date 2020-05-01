import IGame from '@/types/state/game';
import levelsData from '@/data/levels';
import colorSchemes from '@/data/colorSchemes';
import {
  MAKE_MOVE,
  SET_ENTITIES_MOVING,
  RESET_LEVEL,
  SET_LEVEL_LOADED,
  SET_UNDOING,
  LOAD_LEVEL,
  IGameAction,
} from '@/actions/game';

const initialState: IGame = {
  levels: levelsData.map((levelData, i) => ({
    colorScheme: colorSchemes[Math.floor(i % colorSchemes.length)],
    ...levelData,
  })),
  selectedLevelIndex: null,
  gameStateHistory: [],
  entitiesMoving: false,
  levelLoaded: false,
  undoing: false,
};

const reducer = (state = initialState, action: IGameAction): IGame => {
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
        gameStateHistory: [state.gameStateHistory[0]],
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

    case LOAD_LEVEL: {
      return {
        ...state,
        selectedLevelIndex: action.payload.selectedLevelIndex,
        levelLoaded: false,
        entitiesMoving: false,
        undoing: false,
        gameStateHistory: action.payload.gameStateHistory,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

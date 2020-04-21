import levelsData from '@/data/levels';
import IState from '@/types/state';
import {
  MAKE_MOVE,
  SET_ENTITIES_MOVING,
  RESET_LEVEL,
  SET_LEVEL_LOADED,
  SET_UNDOING,
  SET_SELECTED_LEVEL_ID,
  SET_SHOWING_SETTINGS,
  IAction,
} from '@/actions';
import colorSchemes from '@/data/colorSchemes';

const initialState = {
  levels: levelsData.map((levelData, i) => ({
    colorScheme: colorSchemes[Math.floor(i % colorSchemes.length)],
    ...levelData,
  })),
  gameStateHistory: [[levelsData[0].gameState]],
  entitiesMoving: false,
  levelLoaded: false,
  undoing: false,
  selectedLevelId: '1',
  showingSettings: false,
};

const reducer = (state: IState = initialState, action: IAction): IState => {
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

    case SET_SELECTED_LEVEL_ID: {
      const selectedLevel = state.levels.find(
        ({ id }) => id === action.payload.selectedLevelId,
      );

      if (!selectedLevel) {
        return state;
      }

      return {
        ...state,
        selectedLevelId: action.payload.selectedLevelId,
        levelLoaded: false,
        entitiesMoving: false,
        undoing: false,
        gameStateHistory: [[selectedLevel.gameState]],
      };
    }

    case SET_SHOWING_SETTINGS: {
      return {
        ...state,
        showingSettings: action.payload.showingSettings,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

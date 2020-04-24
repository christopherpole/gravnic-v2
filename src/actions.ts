import { getInitialGameState, changeGravityDirection } from 'gravnic-game';
import IGameState from '@/types/gameState';
import IState from '@/types/state';
import LanguageCode from '@/types/languageCodes';
//  @ts-ignore - what's wrong with this??
import { swipeDirections } from 'react-native-swipe-gestures';

export const MAKE_MOVE = 'MAKE_MOVE';
export const SET_ENTITIES_MOVING = 'SET_ENTITIES_MOVING';
export const RESET_LEVEL = 'RESET_LEVEL';
export const SET_LEVEL_LOADED = 'SET_LEVEL_LOADED';
export const SET_UNDOING = 'SET_UNDOING';
export const LOAD_LEVEL = 'LOAD_LEVEL';
export const SET_SHOWING_SETTINGS = 'SET_SHOWING_SETTINGS';
export const SET_FAST_MODE = 'SET_FAST_MODE';
export const SET_LOCALE = 'SET_LOCALE';

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
export interface ILoadLevel {
  type: typeof LOAD_LEVEL;
  payload: {
    selectedLevelId: string;
    gameStateHistory: IGameState[][];
  };
}
export interface ISetShowingSettings {
  type: typeof SET_SHOWING_SETTINGS;
  payload: {
    showingSettings: boolean;
  };
}
export interface ISetFastMode {
  type: typeof SET_FAST_MODE;
  payload: {
    fastMode: boolean;
  };
}
export interface ISetlocale {
  type: typeof SET_LOCALE;
  payload: {
    locale: LanguageCode;
  };
}

export type IAction =
  | IMakeMove
  | ISetEntitiesMoving
  | IResetLevel
  | ISetLevelLoaded
  | ISetUndoing
  | ILoadLevel
  | ISetShowingSettings
  | ISetFastMode
  | ISetlocale;

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
  if (
    JSON.stringify(lastMove[lastMove.length - 1]) !==
    JSON.stringify(newGameStates[newGameStates.length - 1])
  ) {
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

export const loadLevel = (selectedLevelId: string) => (
  dispatch: (action: ILoadLevel) => void,
  getState: () => IState,
) => {
  const { levels } = getState();
  const selectedLevel = levels.find(
    ({ id }: { id: string }) => id === selectedLevelId,
  );

  if (!selectedLevel) {
    throw new Error('Level not found');
  }

  const initialGameState = getInitialGameState(selectedLevel.gameState);

  dispatch({
    type: LOAD_LEVEL,
    payload: {
      selectedLevelId,
      gameStateHistory: [initialGameState],
    },
  });
};

export const setShowingSettings = (
  showingSettings: boolean,
): ISetShowingSettings => ({
  type: SET_SHOWING_SETTINGS,
  payload: {
    showingSettings,
  },
});

export const setFastMode = (fastMode: boolean): ISetFastMode => ({
  type: SET_FAST_MODE,
  payload: {
    fastMode,
  },
});

export const setLocale = (locale: LanguageCode): ISetlocale => ({
  type: SET_LOCALE,
  payload: {
    locale,
  },
});

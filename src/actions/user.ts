import IState from '@/types/state';
import LanguageCode from '@/types/languageCodes';

export const SET_FAST_MODE = 'SET_FAST_MODE';
export const SET_LOCALE = 'SET_LOCALE';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const CLEAR_PROGRESS = 'CLEAR_PROGRESS';

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

export interface IUpdateProgress {
  type: typeof UPDATE_PROGRESS;
  payload: {
    levelId: string;
    moveCount: number;
  };
}

export interface IClearProgress {
  type: typeof CLEAR_PROGRESS;
}

export type IUserAction =
  | ISetFastMode
  | ISetlocale
  | IUpdateProgress
  | IClearProgress;

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

export const updateProgress = () => (
  dispatch: (action: IUpdateProgress) => void,
  getState: () => IState,
) => {
  const {
    game: { gameStateHistory, selectedLevelId, levels },
    user: { progress },
  } = getState();

  const selectedLevel = levels.find(
    ({ id }: { id: string }) => id === selectedLevelId,
  );

  if (!selectedLevel || !selectedLevelId) {
    throw new Error('Level not found');
  }

  if (
    !progress[selectedLevelId] ||
    gameStateHistory.length - 1 < progress[selectedLevelId]
  ) {
    dispatch({
      type: UPDATE_PROGRESS,
      payload: {
        levelId: selectedLevelId,
        moveCount: gameStateHistory.length - 1,
      },
    });
  }
};

export const clearProgress = (): IClearProgress => ({
  type: CLEAR_PROGRESS,
});

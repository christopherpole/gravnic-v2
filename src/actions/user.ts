import IState from '@/types/state';
import LanguageCode from '@/types/languageCodes';
import ISound from '@/types/sound';
import { playSound as utilPlaySound } from '@/utils/sounds';

export const SET_FAST_MODE = 'SET_FAST_MODE';
export const SET_LOCALE = 'SET_LOCALE';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const CLEAR_PROGRESS = 'CLEAR_PROGRESS';
export const SET_DARK_MODE = 'SET_DARK_MODE';
export const SET_SHOW_TUTORIALS = 'SET_SHOW_TUTORIALS';
export const SET_PLAY_MUSIC = 'SET_PLAY_MUSIC';
export const SET_PLAY_SFX = 'SET_PLAY_SFX';

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
    levelIndex: number;
    moveCount: number;
  };
}
export interface ISetDarkMode {
  type: typeof SET_DARK_MODE;
  payload: {
    darkMode: boolean;
  };
}
export interface ISetPlayMusic {
  type: typeof SET_PLAY_MUSIC;
  payload: {
    playMusic: boolean;
  };
}
export interface ISetPlaySfx {
  type: typeof SET_PLAY_SFX;
  payload: {
    playSfx: boolean;
  };
}
export interface ISetShowTutorials {
  type: typeof SET_SHOW_TUTORIALS;
  payload: {
    showTutorials: boolean;
  };
}

export interface IClearProgress {
  type: typeof CLEAR_PROGRESS;
}

export type IUserAction =
  | ISetFastMode
  | ISetlocale
  | IUpdateProgress
  | ISetDarkMode
  | ISetShowTutorials
  | ISetPlayMusic
  | ISetPlaySfx
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

export const setDarkMode = (darkMode: boolean): ISetDarkMode => ({
  type: SET_DARK_MODE,
  payload: {
    darkMode,
  },
});

export const setPlayMusic = (playMusic: boolean): ISetPlayMusic => ({
  type: SET_PLAY_MUSIC,
  payload: {
    playMusic,
  },
});

export const setPlaySfx = (playSfx: boolean): ISetPlaySfx => ({
  type: SET_PLAY_SFX,
  payload: {
    playSfx,
  },
});

export const setShowTutorials = (
  showTutorials: boolean,
): ISetShowTutorials => ({
  type: SET_SHOW_TUTORIALS,
  payload: {
    showTutorials,
  },
});

export const updateProgress = () => (
  dispatch: (action: IUpdateProgress) => void,
  getState: () => IState,
) => {
  const {
    game: { gameStateHistory, selectedLevelIndex },
    user: { progress },
  } = getState();
  if (selectedLevelIndex === null) return;

  if (
    !progress[selectedLevelIndex] ||
    gameStateHistory.length - 1 < progress[selectedLevelIndex]
  ) {
    dispatch({
      type: UPDATE_PROGRESS,
      payload: {
        levelIndex: selectedLevelIndex,
        moveCount: gameStateHistory.length - 1,
      },
    });
  }
};

export const clearProgress = (): IClearProgress => ({
  type: CLEAR_PROGRESS,
});

//  @TODO - Revise this. Doesn't seem right. Easy way to access muted from state rather than call util directly
export const playSound = (sound: ISound) => (
  dispatch: () => void,
  getState: () => IState,
) => {
  const {
    user: { playSfx },
  } = getState();

  if (!playSfx) return;
  utilPlaySound(sound);
};

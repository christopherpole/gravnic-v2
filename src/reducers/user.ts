import IUser from '@/types/state/user';
import LanguageCode from '@/types/languageCodes';
import {
  SET_FAST_MODE,
  SET_LOCALE,
  UPDATE_PROGRESS,
  CLEAR_PROGRESS,
  IUserAction,
  SET_DARK_MODE,
  SET_SHOW_TUTORIALS,
  SET_PLAY_MUSIC,
  SET_PLAY_SFX,
} from '@/actions/user';

const initialState: IUser = {
  fastMode: false,
  locale: 'en' as LanguageCode,
  progress: {},
  darkMode: false,
  showTutorials: true,
  playMusic: true,
  playSfx: true,
};

const reducer = (state = initialState, action: IUserAction): IUser => {
  switch (action.type) {
    case SET_FAST_MODE: {
      return {
        ...state,
        fastMode: action.payload.fastMode,
      };
    }

    case SET_DARK_MODE: {
      return {
        ...state,
        darkMode: action.payload.darkMode,
      };
    }

    case SET_PLAY_MUSIC: {
      return {
        ...state,
        playMusic: action.payload.playMusic,
      };
    }

    case SET_PLAY_SFX: {
      return {
        ...state,
        playSfx: action.payload.playSfx,
      };
    }

    case SET_SHOW_TUTORIALS: {
      return {
        ...state,
        showTutorials: action.payload.showTutorials,
      };
    }

    case SET_LOCALE: {
      return {
        ...state,
        locale: action.payload.locale,
      };
    }

    case UPDATE_PROGRESS: {
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.payload.levelIndex]: action.payload.moveCount,
        },
      };
    }

    case CLEAR_PROGRESS: {
      return {
        ...state,
        progress: initialState.progress,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

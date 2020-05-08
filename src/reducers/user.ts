import IUser from '@/types/state/user';
import LanguageCode from '@/types/languageCodes';
import {
  SET_FAST_MODE,
  SET_LOCALE,
  UPDATE_PROGRESS,
  CLEAR_PROGRESS,
  IUserAction,
} from '@/actions/user';

const initialState: IUser = {
  fastMode: false,
  locale: 'en' as LanguageCode,
  progress: {},
  tutorialsSeen: {},
};

const reducer = (state = initialState, action: IUserAction): IUser => {
  switch (action.type) {
    case SET_FAST_MODE: {
      return {
        ...state,
        fastMode: action.payload.fastMode,
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
        tutorialsSeen: initialState.tutorialsSeen,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

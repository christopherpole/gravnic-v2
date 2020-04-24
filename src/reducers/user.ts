import IUser from '@/types/state/user';
import LanguageCode from '@/types/languageCodes';
import { SET_FAST_MODE, SET_LOCALE, IAction } from '@/actions';

const initialState: IUser = {
  fastMode: false,
  locale: 'en' as LanguageCode,
};

const reducer = (state = initialState, action: IAction): IUser => {
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

    default: {
      return state;
    }
  }
};

export default reducer;

import IUi from '@/types/state/ui';
import {
  SET_SHOWING_SETTINGS,
  SET_SHOWING_LEVEL_SELECT,
  IUiAction,
} from '@/actions/ui';

const initialState: IUi = {
  showingSettings: false,
  showingLevelSelect: true,
};

const reducer = (state = initialState, action: IUiAction): IUi => {
  switch (action.type) {
    case SET_SHOWING_SETTINGS: {
      return {
        ...state,
        showingSettings: action.payload.showingSettings,
      };
    }

    case SET_SHOWING_LEVEL_SELECT: {
      return {
        ...state,
        showingLevelSelect: action.payload.showingLevelSelect,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;

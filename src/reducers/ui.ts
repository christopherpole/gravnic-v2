import IUi from '@/types/state/ui';
import { SET_SHOWING_SETTINGS, IAction } from '@/actions';

const initialState: IUi = {
  showingSettings: false,
};

const reducer = (state = initialState, action: IAction): IUi => {
  switch (action.type) {
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

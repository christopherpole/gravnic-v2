export const SET_SHOWING_SETTINGS = 'SET_SHOWING_SETTINGS';
export const SET_SHOWING_LEVEL_SELECT = 'SET_SHOWING_LEVEL_SELECT';

export interface ISetShowingSettings {
  type: typeof SET_SHOWING_SETTINGS;
  payload: {
    showingSettings: boolean;
  };
}

export interface ISetShowingLevelSelect {
  type: typeof SET_SHOWING_LEVEL_SELECT;
  payload: {
    showingLevelSelect: boolean;
  };
}

export type IUiAction = ISetShowingSettings | ISetShowingLevelSelect;

export const setShowingSettings = (
  showingSettings: boolean,
): ISetShowingSettings => ({
  type: SET_SHOWING_SETTINGS,
  payload: {
    showingSettings,
  },
});

export const setShowingLevelSelect = (
  showingLevelSelect: boolean,
): ISetShowingLevelSelect => ({
  type: SET_SHOWING_LEVEL_SELECT,
  payload: {
    showingLevelSelect,
  },
});

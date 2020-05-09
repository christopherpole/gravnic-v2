import { createSelector } from 'reselect';

import IState from '@/types/state';
import { disabledColorScheme } from '@/data/colorSchemes';

//  User's current language
export const selectLocale = createSelector(
  (state: IState) => state.user,
  (user) => user.locale,
);

//  If the user has fast mode enabled
export const selectIsFastMode = createSelector(
  (state: IState) => state.user,
  (user) => user.fastMode,
);

//  Currently selected level index
export const selectCurrentLevelIndex = createSelector(
  (state: IState) => state.game,
  ({ selectedLevelIndex }) => selectedLevelIndex,
);

//  Currently selected level
export const selectCurrentLevel = createSelector(
  (state: IState) => state.game,
  selectCurrentLevelIndex,
  ({ levels }, currentLevelIndex) =>
    currentLevelIndex !== null ? levels[currentLevelIndex] : null,
);

//  Get the color scheme for the currently selected level
export const selectCurrentColorScheme = createSelector(
  selectCurrentLevel,
  (currentLevel) =>
    currentLevel !== null ? currentLevel.colorScheme : disabledColorScheme,
);

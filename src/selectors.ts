import { createSelector } from 'reselect';
import { levelIsComplete } from 'gravnic-game';

// import { FEATURES, ENABLED_FEATURES } from '@/config';
// import useTheme from '@/hooks/useTheme';
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

//  Return true if there is a move for the user to undo
export const selectMoveMade = createSelector(
  (state: IState) => state.game,
  ({ gameStateHistory, undoing }) =>
    gameStateHistory.length > (undoing ? 2 : 1),
);

//  Return true if the current level has been completed successfully
export const selectCurrentLevelIsWon = createSelector(
  (state: IState) => state.game,
  ({ undoing, entitiesMoving, gameStateHistory, selectedLevelIndex }) => {
    if (undoing || entitiesMoving || selectedLevelIndex === null) return false;

    const lastMove = gameStateHistory[gameStateHistory.length - 1];

    return levelIsComplete(lastMove[lastMove.length - 1]);
  },
);

//  Returns the number of moves completed for the current level
export const selectNoOfMovesMade = createSelector(
  (state: IState) => state.game,
  ({ gameStateHistory, undoing, entitiesMoving }) =>
    gameStateHistory.length - (entitiesMoving || undoing ? 2 : 1),
);

//  Returns the number of stars available for the current level
export const selectCurrentLevelStars = createSelector(
  selectCurrentLevel,
  (currentLevel) => (currentLevel ? currentLevel.stars : null),
);

//  Returns the progress for the currently selected level
export const selectCurrentLevelProgress = createSelector(
  selectCurrentLevelIndex,
  (state: IState) => state.user,
  (currentLevelIndex, { progress }) =>
    currentLevelIndex !== null ? progress[currentLevelIndex] : 0,
);

//  Returns all levels
export const selectLevels = createSelector(
  (state: IState) => state.game,
  ({ levels }) => levels,
);

//  Returns true if the level select screen is showing
export const selectShowingLevelSelect = createSelector(
  (state: IState) => state.ui,
  ({ showingLevelSelect }) => showingLevelSelect,
);

//  Returns the user's full progress
export const selectProgress = createSelector(
  (state: IState) => state.user,
  ({ progress }) => progress,
);

//  Returns the index of the last level that the user has unlocked
export const selectLatestUnlockedLevelIndex = createSelector(
  (state: IState) => state.user,
  ({ progress }) =>
    Object.keys(progress).length > 0
      ? parseInt(
          Object.keys(progress).sort(
            (a, b) => parseInt(a, 10) - parseInt(b, 10),
          )[Object.keys(progress).length - 1],
          10,
        )
      : 0,
);

//  Returns the index of the position on the level select list that the want to be at the top of the screen
export const selectListScrollIndex = createSelector(
  selectLatestUnlockedLevelIndex,
  (latestUnlockedLevelIndex) => {
    let listScrollIndex = Math.floor((latestUnlockedLevelIndex + 1) / 3) - 1;
    listScrollIndex = listScrollIndex < 0 ? 0 : listScrollIndex;
    return listScrollIndex;
  },
);

//  Returns true if there are more levels to go
export const selectHasNextLevel = createSelector(
  (state: IState) => state.game,
  ({ selectedLevelIndex, levels }) =>
    selectedLevelIndex === null || selectedLevelIndex < levels.length - 1,
);

//  Returns true if a level is loaded
export const selectLevelLoaded = createSelector(
  (state: IState) => state.game,
  ({ levelLoaded }) => levelLoaded,
);

//  Returns true a move is currently being undone
export const selectLevelUndoing = createSelector(
  (state: IState) => state.game,
  ({ undoing }) => undoing,
);

//  Returns the game state history
export const selectGameStateHistory = createSelector(
  (state: IState) => state.game,
  ({ gameStateHistory }) => gameStateHistory,
);

//  Returns true if the current level has been cleared by the user at some point
export const selectCurrentLevelCompleted = createSelector(
  (state: IState) => state.game,
  (state: IState) => state.user,
  ({ selectedLevelIndex }, { progress }) =>
    selectedLevelIndex !== null && progress[selectedLevelIndex] > 0,
);

//  Returns total number of stars in the game
export const selectTotalStars = createSelector(
  selectLevels,
  (levels) => levels.length * 3,
);

//  Returns total number of stars in the game
export const selectAchievedStarsCount = createSelector(
  (state: IState) => state.user,
  (state: IState) => state.game,
  ({ progress }, { levels }) => {
    let count = 0;

    //  Check the number of stars we've got for each level
    Object.keys(progress).forEach((key) => {
      const level = levels[parseInt(key, 10)];

      if (level) {
        //  @TODO: revise the structure of "stars" for the levels
        count += level.stars.filter(
          (star) => progress[parseInt(key, 10)] <= star,
        ).length;
      }
    });

    return count;
  },
);

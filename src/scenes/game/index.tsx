import React, { memo, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { View, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSelector, useDispatch } from 'react-redux';
import { levelIsComplete } from 'gravnic-game';

import {
  SWIPE_VELOCITY_THRESHOLD,
  DIRECTIONAL_OFFSET_THRESHOLD,
} from '@/config';
import {
  makeMove,
  resetLevel,
  setUndoing,
  loadInitialLevel,
  loadLevel,
} from '@/actions/game';
import { setShowingSettings, setShowingLevelSelect } from '@/actions/ui';
import { updateProgress } from '@/actions/user';
import GameRenderer from '@/scenes/game/renderer';
import Stars from '@/scenes/game/stars';
import Button from '@/components/button';
import IState from '@/types/state';
import undoImg from '@/assets/undo.png';
import menuImg from '@/assets/menu.png';
import settingsImg from '@/assets/settings.png';

const Wrapper = styled(View)<{ background: string }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
`;

const StarsWrapper = styled(View)`
  padding-top: ${(props) => props.theme.spacing.large};
  width: 100%;
`;

const StyledGestureRecognizer = styled(GestureRecognizer)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const GameAreaWrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 ${(props) => props.theme.spacing.medium};
`;

const ActionsWrapper = styled(View)`
  flex-direction: row;
  display: flex;
  padding-bottom: ${(props) => props.theme.spacing.large};
`;

const LevelWonMessageWrapper = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LevelWonMessageWrapperInner = styled(View)`
  padding: ${(props) => props.theme.spacing.medium};
  border: 2px solid black;
  background: white;
`;

const LevelWonMessage = styled(Text)`
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

const GameScene = () => {
  const dispatch = useDispatch();

  const currentLevelIndex = useSelector(
    ({ game: { selectedLevelIndex } }: IState) => selectedLevelIndex,
  );

  const hasNextLevel = useSelector(
    ({ game: { selectedLevelIndex, levels } }: IState) =>
      selectedLevelIndex === null || selectedLevelIndex < levels.length - 1,
  );

  //  Get the current level data based on the current level ID
  const currentLevel = useSelector(
    ({ game: { levels, selectedLevelIndex } }: IState) =>
      selectedLevelIndex !== null ? levels[selectedLevelIndex] : null,
  );

  //  Should we show the restart/undo buttons?
  const showGameButtons = useSelector(
    ({ game: { gameStateHistory, undoing } }: IState) =>
      gameStateHistory.length > (undoing ? 2 : 1),
  );

  //  Has the level been completed successfully?
  const levelWon = useSelector(
    ({
      game: { undoing, entitiesMoving, gameStateHistory, selectedLevelIndex },
    }: IState) => {
      if (undoing || entitiesMoving || selectedLevelIndex === null)
        return false;

      const lastMove = gameStateHistory[gameStateHistory.length - 1];

      return levelIsComplete(lastMove[lastMove.length - 1]);
    },
  );

  //  If a level has been won then let's update the user's progress
  useEffect(() => {
    if (levelWon) {
      dispatch(updateProgress());
    }
  }, [levelWon, dispatch]);

  //  Load the first unsolved level available if there is no level
  if (!currentLevel || currentLevelIndex === null) {
    dispatch(loadInitialLevel());
    return null;
  }

  return (
    <Wrapper background={currentLevel.colorScheme.background}>
      <StyledGestureRecognizer
        onSwipe={(swipeDirection) => {
          if (levelWon) return;
          dispatch(makeMove(swipeDirection));
        }}
        config={{
          velocityThreshold: SWIPE_VELOCITY_THRESHOLD,
          directionalOffsetThreshold: DIRECTIONAL_OFFSET_THRESHOLD,
        }}
      >
        <StarsWrapper>
          <Stars />
        </StarsWrapper>

        <GameAreaWrapper>
          <GameRenderer />

          {levelWon && (
            <LevelWonMessageWrapper>
              <LevelWonMessageWrapperInner>
                <LevelWonMessage>You&apos;ve won!</LevelWonMessage>
                {hasNextLevel && (
                  <Button
                    onPress={() => {
                      dispatch(loadLevel(currentLevelIndex + 1));
                    }}
                  >
                    Next level
                  </Button>
                )}
              </LevelWonMessageWrapperInner>
            </LevelWonMessageWrapper>
          )}
        </GameAreaWrapper>
      </StyledGestureRecognizer>

      <ActionsWrapper>
        <Button
          onPress={() => {
            dispatch(setShowingLevelSelect(true));
          }}
          image={menuImg}
        />
        <Button
          disabled={!showGameButtons}
          onPress={() => {
            dispatch(setUndoing(true));
          }}
          image={undoImg}
        />
        <Button
          disabled={!showGameButtons}
          onPress={() => {
            dispatch(resetLevel());
          }}
          image={undoImg}
        />
        <Button
          onPress={() => {
            dispatch(setShowingSettings(true));
          }}
          image={settingsImg}
        />
      </ActionsWrapper>
    </Wrapper>
  );
};

export default memo(GameScene);

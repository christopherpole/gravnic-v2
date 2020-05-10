import React, { memo, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSelector, useDispatch } from 'react-redux';

import {
  SWIPE_VELOCITY_THRESHOLD,
  DIRECTIONAL_OFFSET_THRESHOLD,
} from '@/config';
import { makeMove, loadInitialLevel } from '@/actions/game';
import { updateProgress } from '@/actions/user';
import {
  selectCurrentLevel,
  selectCurrentLevelIsWon,
  selectNoOfMovesMade,
  selectColorScheme,
} from '@/selectors';
import GameRenderer from '@/scenes/game/renderer';
import Stars from './stars';
import LevelLostMessage from './levelLostMessage';
import LevelWonMessage from './levelWonMessage';
import Actions from './actions';
import TutorialArea from './tutorialArea';

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
  margin-top: ${(props) => props.theme.spacing.large};
  width: 100%;
  display: flex;
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

const GameScene = () => {
  const dispatch = useDispatch();
  const currentLevel = useSelector(selectCurrentLevel);
  const levelWon = useSelector(selectCurrentLevelIsWon);
  const noOfMovesMade = useSelector(selectNoOfMovesMade);
  //  @ts-ignore - no idea why this is playing up
  const colorScheme = useSelector(selectColorScheme);

  //  If a level has been won then let's update the user's progress
  useEffect(() => {
    if (levelWon) {
      dispatch(updateProgress());
    }
  }, [levelWon, dispatch]);

  //  Load the first unsolved level available if there is no level
  if (!currentLevel) {
    dispatch(loadInitialLevel());
    return null;
  }

  const levelLost = noOfMovesMade >= currentLevel.stars[2] && !levelWon;

  return (
    <Wrapper background={colorScheme.background}>
      <StyledGestureRecognizer
        onSwipe={(swipeDirection) => {
          if (levelWon || levelLost) return;
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
          {levelLost && <LevelLostMessage />}
          {levelWon && <LevelWonMessage />}
        </GameAreaWrapper>
      </StyledGestureRecognizer>

      <TutorialArea tutorial={currentLevel.tutorial} />
      <Actions />
    </Wrapper>
  );
};

export default memo(GameScene);

import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSelector, useDispatch } from 'react-redux';

import {
  SWIPE_VELOCITY_THRESHOLD,
  DIRECTIONAL_OFFSET_THRESHOLD,
} from '@/config';
import {
  makeMove,
  resetLevel,
  setUndoing,
  setShowingSettings,
} from '@/actions';
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

interface IGameScene {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

const GameScene = ({ navigation }: IGameScene) => {
  const dispatch = useDispatch();

  const showGameButtons = useSelector(
    ({ gameStateHistory, undoing }: IState) =>
      gameStateHistory.length > (undoing ? 2 : 1),
  );

  const background = useSelector(({ levels, selectedLevelId }: IState) => {
    const currentLevel = levels.find((level) => level.id === selectedLevelId);

    if (!currentLevel) {
      throw new Error('Level not found');
    }

    return currentLevel.colorScheme.background;
  });

  return (
    <Wrapper background={background}>
      <StyledGestureRecognizer
        onSwipe={(swipeDirection) => {
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
        </GameAreaWrapper>
      </StyledGestureRecognizer>

      <ActionsWrapper>
        <Button
          onPress={() => {
            navigation.navigate('LevelSelect');
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

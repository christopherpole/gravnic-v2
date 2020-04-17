import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSelector, useDispatch } from 'react-redux';

import {
  SWIPE_VELOCITY_THRESHOLD,
  DIRECTIONAL_OFFSET_THRESHOLD,
} from '@/config';
import { makeMove, resetLevel, setUndoing } from '@/actions';
import GameRenderer from '@/scenes/game/renderer';
import Stars from '@/scenes/game/stars';
import Button from '@/components/button';
import IState from '@/types/state';
import undoImg from '@/assets/undo.png';

const Wrapper = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
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

const GameScene = () => {
  const dispatch = useDispatch();

  const showGameButtons = useSelector(
    ({ gameStateHistory, undoing }: IState) =>
      gameStateHistory.length > (undoing ? 2 : 1),
  );

  return (
    <Wrapper>
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
      </ActionsWrapper>
    </Wrapper>
  );
};

export default GameScene;

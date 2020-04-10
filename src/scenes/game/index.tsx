import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useDispatch } from 'react-redux';

import {
  SWIPE_VELOCITY_THRESHOLD,
  DIRECTIONAL_OFFSET_THRESHOLD,
} from '@/config';
import { makeMove, resetLevel, setUndoing } from '@/actions';
import GameRenderer from '@/scenes/game/renderer';
import Actions from '@/components/actions';
import Button from '@/components/button';

const Wrapper = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #ddd;
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
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
  padding-top: 0;
`;

const GameScene = () => {
  const dispatch = useDispatch();

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
        <GameAreaWrapper>
          <GameRenderer />
        </GameAreaWrapper>
      </StyledGestureRecognizer>

      <ActionsWrapper>
        <Actions>
          <Button>Menu</Button>
          <Button
            onPress={() => {
              dispatch(setUndoing(true));
            }}
          >
            Undo
          </Button>
          <Button
            onPress={() => {
              dispatch(resetLevel());
            }}
          >
            Restart
          </Button>
          <Button>Settings</Button>
        </Actions>
      </ActionsWrapper>
    </Wrapper>
  );
};

export default GameScene;

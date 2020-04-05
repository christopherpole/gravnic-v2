import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

import GameRenderer from '@/components/gameRenderer';
import Actions from '@/components/actions';
import Button from '@/components/button';

const Wrapper = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #ddd;
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

const GameScene = () => (
  <Wrapper>
    <GameAreaWrapper>
      <GameRenderer />
    </GameAreaWrapper>
    <ActionsWrapper>
      <Actions>
        <Button>Menu</Button>
        <Button>Undo</Button>
        <Button>Restart</Button>
        <Button>Settings</Button>
      </Actions>
    </ActionsWrapper>
  </Wrapper>
);

export default GameScene;

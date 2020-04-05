import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

import Actions from '@/components/actions';
import Button from '@/components/button';

const Wrapper = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ActionsWrapper = styled(View)`
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
`;

const GameScene = () => (
  <Wrapper>
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

import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSelector, useDispatch } from 'react-redux';

import { makeMove } from '@/actions';
import IState from '@/types/state';
import { ENTITY_SIZE } from '@/config';
import IEntityData from '@/types/entityData';
import IGameState from '@/types/gameState';
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
  const gameState = useSelector((state: IState) => state.gameState);
  const dispatch = useDispatch();

  const getEntitiesData = (inputGameState: IGameState) => {
    const entitiesData: IEntityData[] = [];

    //  Add the static entities
    inputGameState.forEach((entityRow, i) => {
      entityRow.forEach((entityData, j) => {
        if (entityData.staticEntity) {
          entitiesData.push({
            id: entityData.staticEntity.id,
            x: j * ENTITY_SIZE,
            y: i * ENTITY_SIZE,
          });
        }
      });
    });

    //  Add the movable entities
    inputGameState.forEach((entityRow, i) => {
      entityRow.forEach((entityData, j) => {
        if (entityData.movableEntity) {
          entitiesData.push({
            id: entityData.movableEntity.id,
            x: j * ENTITY_SIZE,
            y: i * ENTITY_SIZE,
            color: entityData.movableEntity.color
              ? entityData.movableEntity.color.replace('#', '0x')
              : undefined,
          });
        }
      });
    });

    return entitiesData;
  };

  return (
    <Wrapper>
      <StyledGestureRecognizer
        onSwipe={(swipeDirection) => {
          dispatch(makeMove(swipeDirection));
        }}
        config={{
          velocityThreshold: 0.2,
          directionalOffsetThreshold: 50,
        }}
      >
        <GameAreaWrapper>
          <GameRenderer entitiesData={getEntitiesData(gameState)} />
        </GameAreaWrapper>
      </StyledGestureRecognizer>
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
};

export default GameScene;

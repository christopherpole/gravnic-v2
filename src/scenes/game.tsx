import React, { useState } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { getInitialGameState, changeGravityDirection } from 'gravnic-game';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';

import { GAME_STATE, ENTITY_SIZE } from '@/config';
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
  let initialGameState = getInitialGameState(GAME_STATE);
  initialGameState = initialGameState[initialGameState.length - 1];

  const [gameState, setGameState] = useState<IGameState>(initialGameState);

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
          let direction;

          switch (swipeDirection) {
            case swipeDirections.SWIPE_UP:
              direction = 'MOVE_UP';
              break;
            case swipeDirections.SWIPE_RIGHT:
              direction = 'MOVE_RIGHT';
              break;
            case swipeDirections.SWIPE_DOWN:
              direction = 'MOVE_DOWN';
              break;
            case swipeDirections.SWIPE_LEFT:
              direction = 'MOVE_LEFT';
              break;
            default:
          }

          initialGameState = changeGravityDirection(gameState, direction);
          initialGameState = initialGameState[initialGameState.length - 1];

          setGameState(initialGameState);
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

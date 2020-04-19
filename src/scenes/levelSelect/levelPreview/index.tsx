import React from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';

import ILevelData from '@/types/levelData';

const Wrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

const Row = styled(View)`
  display: flex;
  flex-direction: row;
`;

const Block = styled(View)<{ color: string }>`
  height: 15px;
  width: 15px;

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

const LevelPreview = ({ gameState }: ILevelData) => {
  return (
    <Wrapper>
      {gameState.map((gameStateRow) => (
        <Row>
          {gameStateRow.map(({ staticEntity, movableEntity }) => {
            let color = 'transparent';

            if (staticEntity) {
              color = 'white';
            }

            if (movableEntity && movableEntity.color) {
              color = movableEntity.color;
            }

            return <Block color={color} />;
          })}
        </Row>
      ))}
    </Wrapper>
  );
};

export default LevelPreview;

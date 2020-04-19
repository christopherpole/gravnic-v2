import React from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';

import IColorScheme from '@/types/colorScheme';
import ILevelData from '@/types/levelData';

const Wrapper = styled(View)<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
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

interface ILevelPreview extends ILevelData {
  colorScheme: IColorScheme;
}

const LevelPreview = ({ gameState, colorScheme }: ILevelPreview) => {
  return (
    <Wrapper background={colorScheme.background}>
      {gameState.map((gameStateRow, i) => (
        <Row key={`row-${i}`}>
          {gameStateRow.map(({ staticEntity, movableEntity }, j) => {
            let color = 'transparent';

            if (staticEntity) {
              color = 'white';
            }

            if (movableEntity && movableEntity.color) {
              color = colorScheme.blocks[movableEntity.color];
            }

            return <Block key={`block-${i}-${j}`} color={color} />;
          })}
        </Row>
      ))}
    </Wrapper>
  );
};

export default LevelPreview;

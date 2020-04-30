import React, { memo } from 'react';
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

const PreviewWrapper = styled(View)`
  margin-bottom: ${(props) => props.theme.spacing.large};
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

const ProgressWrapper = styled(View)`
  display: flex;
  flex-direction: row;
`;

const Star = styled(View)<{ achieved?: boolean }>`
  height: 15px;
  width: 15px;
  background: #ccc;
  border: 1px solid black;
  margin: 0 2.5%;

  ${(props) =>
    props.achieved &&
    css`
      background: yellow;
    `}
`;

interface ILevelPreview extends ILevelData {
  colorScheme: IColorScheme;
  progress: number;
}

const LevelPreview = ({ gameState, colorScheme, progress }: ILevelPreview) => {
  return (
    <Wrapper background={colorScheme.background}>
      <PreviewWrapper>
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
      </PreviewWrapper>
      <ProgressWrapper>
        <Star achieved={progress >= 1} />
        <Star achieved={progress >= 2} />
        <Star achieved={progress >= 3} />
      </ProgressWrapper>
    </Wrapper>
  );
};

export default memo(LevelPreview);

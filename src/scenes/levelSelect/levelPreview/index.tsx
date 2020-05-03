import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View, Image } from 'react-native';
import { ENTITIES } from 'gravnic-game';

import IColorScheme from '@/types/colorScheme';
import ILevelData from '@/types/levelData';
import rainbowImg from '@/assets/entities/rainbow.png';
import glassImg from '@/assets/entities/glass.png';
import blackHoleImg from '@/assets/entities/black-hole.png';

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

const StyledImage = styled(Image)`
  height: 15px;
  width: 15px;
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

const Locked = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.8;
`;

interface ILevelPreview extends ILevelData {
  colorScheme: IColorScheme;
  progress: number;
  locked: boolean;
}

const LevelPreview = ({
  locked,
  gameState,
  colorScheme,
  progress,
}: ILevelPreview) => {
  return (
    <Wrapper background={colorScheme.background}>
      <PreviewWrapper>
        {gameState.map((gameStateRow, i) => (
          <Row key={`row-${i}`}>
            {gameStateRow.map(({ staticEntity, movableEntity }, j) => {
              let color = 'transparent';
              let img;

              if (staticEntity) {
                color = 'white';
              }

              if (movableEntity && movableEntity.color) {
                color = colorScheme.blocks[movableEntity.color];
              }

              //  Show the images for any special blocks
              if (movableEntity) {
                if (movableEntity.entityId === ENTITIES.RAINBOW_BLOCK.id) {
                  img = rainbowImg;
                } else if (movableEntity.entityId === ENTITIES.GLASS.id) {
                  img = glassImg;
                }
              }

              if (staticEntity) {
                if (staticEntity.entityId === ENTITIES.BLACK_HOLE.id) {
                  img = blackHoleImg;
                }
              }

              return (
                <Block key={`block-${i}-${j}`} color={color}>
                  {img && <StyledImage source={img} />}
                </Block>
              );
            })}
          </Row>
        ))}
      </PreviewWrapper>
      <ProgressWrapper>
        <Star achieved={progress >= 1} />
        <Star achieved={progress >= 2} />
        <Star achieved={progress >= 3} />
      </ProgressWrapper>
      {locked && <Locked />}
    </Wrapper>
  );
};

export default memo(LevelPreview);

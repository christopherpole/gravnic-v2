import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View, Image } from 'react-native';
import { ENTITIES } from 'gravnic-game';

import IColorScheme from '@/types/colorScheme';
import ILevelData from '@/types/levelData';
import Star from '@/components/star';
import rainbowImg from '@/assets/entities/rainbow.png';
import glassImg from '@/assets/entities/glass.png';
import blackHoleImg from '@/assets/entities/black-hole.png';
import stickySpoyImg from '@/assets/entities/sticky-spot.png';

const Wrapper = styled(View)<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 5%; /* ${5 * 0.8}% */
  
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
`;

const PreviewWrapper = styled(View)`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewWrapperInner = styled(View)``;

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
  height: 100%;
  width: 100%;
`;

const ProgressWrapper = styled(View)`
  flex-direction: row;
  display: flex;
`;

const StarWrapper = styled(View)`
  margin: 0 ${(props) => props.theme.spacing.small};
  aspect-ratio: 1;
  width: 20%;
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
        <PreviewWrapperInner>
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
                  } else if (
                    staticEntity.entityId === ENTITIES.STICKY_SPOT.id
                  ) {
                    img = stickySpoyImg;
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
        </PreviewWrapperInner>
      </PreviewWrapper>

      <ProgressWrapper>
        <StarWrapper>
          <Star filled={progress >= 1} />
        </StarWrapper>
        <StarWrapper>
          <Star filled={progress >= 2} />
        </StarWrapper>
        <StarWrapper>
          <Star filled={progress >= 3} />
        </StarWrapper>
      </ProgressWrapper>

      {locked && <Locked />}
    </Wrapper>
  );
};

export default memo(LevelPreview);

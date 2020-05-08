import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View, Image } from 'react-native';
import { ENTITIES } from 'gravnic-game';

import { FEATURES, ENABLED_FEATURES } from '@/config';
import IColorScheme from '@/types/colorScheme';
import ILevelData from '@/types/levelData';
import Star from '@/components/star';
import LockIcon from '@/components/icons/lock';
import rainbowImg from '@/assets/entities/rainbow.png';
import glassImg from '@/assets/entities/glass.png';
import blackHoleImg from '@/assets/entities/black-hole.png';
import stickySpoyImg from '@/assets/entities/sticky-spot.png';

const Wrapper = styled(View)<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 5%;

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

const PreviewWrapperInner = styled(View)`
  box-shadow: ${(props) => props.theme.shadows.default};
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

const StyledImage = styled(Image)<{ isGray?: boolean }>`
  height: 100%;
  width: 100%;

  ${(props) =>
    props.isGray &&
    css`
      tint-color: #ddd;
    `}
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
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LockIconWrapper = styled(View)`
  width: 30%;
  aspect-ratio: 1;
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
  const newMoveCounterColor = ENABLED_FEATURES.includes(FEATURES.COLORED_STARS)
    ? colorScheme.moveCounter.new
    : 'yellow';
  const usedMoveCounterColor = ENABLED_FEATURES.includes(FEATURES.COLORED_STARS)
    ? colorScheme.moveCounter.used
    : 'white';

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
                  color = '#fff';
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
                    {img && <StyledImage isGray={locked} source={img} />}
                  </Block>
                );
              })}
            </Row>
          ))}
        </PreviewWrapperInner>
      </PreviewWrapper>

      <ProgressWrapper>
        <StarWrapper>
          <Star
            color={progress >= 1 ? newMoveCounterColor : usedMoveCounterColor}
          />
        </StarWrapper>
        <StarWrapper>
          <Star
            color={progress >= 2 ? newMoveCounterColor : usedMoveCounterColor}
          />
        </StarWrapper>
        <StarWrapper>
          <Star
            color={progress >= 3 ? newMoveCounterColor : usedMoveCounterColor}
          />
        </StarWrapper>
      </ProgressWrapper>

      {locked && (
        <Locked>
          <LockIconWrapper>
            <LockIcon />
          </LockIconWrapper>
        </Locked>
      )}
    </Wrapper>
  );
};

export default memo(LevelPreview);

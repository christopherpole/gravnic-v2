import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { View, Image } from 'react-native';
import { ENTITIES } from 'gravnic-game';

import Star from '@/components/star';
import ILevelData from '@/types/levelData';
import { selectColorScheme } from '@/selectors';
import rainbowImg from '@/assets/entities/rainbow.png';
import glassImg from '@/assets/entities/glass.png';
import blackHoleImg from '@/assets/entities/black-hole.png';
import stickySpoyImg from '@/assets/entities/sticky-spot.png';
import LockIcon from '@/components/icons/lock';
import IState from '@/types/state';

const Wrapper = styled(View)<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: ${(props) => props.theme.spacing.medium};

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
  width: 100%;
`;

const Block = styled(View)<{ color: string; size: number }>`
  width: ${(props) => props.size}%;
  aspect-ratio: 1;
  max-width: 20%;

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
  width: 100%;
  justify-content: center;
`;

const StarWrapper = styled(View)`
  margin: 0 4%;
  width: 26%;
  aspect-ratio: 1;
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
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.sizing.medium};
  height: ${(props) => props.theme.sizing.medium};
`;

interface ILevelPreview extends ILevelData {
  progress: number;
  locked: boolean;
  levelIndex: number;
}

const LevelPreview = ({
  locked,
  gameState,
  progress,
  levelIndex,
}: ILevelPreview) => {
  const colorScheme = useSelector((state: IState) =>
    selectColorScheme(state, levelIndex),
  );

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
                  <Block
                    size={
                      (10 / Math.max(gameState.length, gameState[0].length)) *
                      10
                    }
                    key={`block-${i}-${j}`}
                    color={color}
                  >
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
          <Star filled={progress >= 1} />
        </StarWrapper>
        <StarWrapper>
          <Star filled={progress >= 2} />
        </StarWrapper>
        <StarWrapper>
          <Star filled={progress >= 3} />
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

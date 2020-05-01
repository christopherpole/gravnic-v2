import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import IState from '@/types/state';

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Star = styled(View)<{
  achieved?: boolean;
  used?: boolean;
  large?: boolean;
}>`
  width: 5%;
  aspect-ratio: 1;
  background: #ffd700;
  margin: 0 2.5%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  border: 1px solid ${(props) => props.theme.colors.disabled};
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.achieved &&
    css`
      background: purple;
    `}

  ${(props) =>
    props.used &&
    css`
      background: ${props.theme.colors.disabled};
    `}

  ${(props) =>
    props.large &&
    css`
      width: 8%;
    `}
`;

const Stars = () => {
  //  Get the stars for the current level
  const stars = useSelector(
    ({ game: { levels, selectedLevelIndex } }: IState) => {
      if (selectedLevelIndex === null) {
        return null;
      }

      const currentLevel = levels[selectedLevelIndex];
      return currentLevel.stars;
    },
  );

  //  Get the number of moves that have currently been made for this level
  const noOfMovesMade = useSelector(
    ({ game: { gameStateHistory, undoing } }: IState) =>
      gameStateHistory.length - (undoing ? 2 : 1),
  );

  //  Get the current record for the number of moves
  const currentProgress = useSelector(
    ({ game: { selectedLevelIndex }, user: { progress } }: IState) =>
      selectedLevelIndex !== null ? progress[selectedLevelIndex] : 0,
  );

  if (!stars) return null;

  return (
    <Wrapper>
      {[...Array(stars[2])].map((i, index) => (
        <Star
          achieved={index >= currentProgress - 1}
          key={`star-${index}`}
          used={index < noOfMovesMade}
          large={stars.includes(index + 1)}
        />
      ))}
    </Wrapper>
  );
};

export default memo(Stars);

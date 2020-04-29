import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import IState from '@/types/state';

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Star = styled(View)<{ used?: boolean; large?: boolean }>`
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

const Number = styled(Text)`
  color: black;
  font-weight: bold;
`;

const Stars = () => {
  //  Get the stars for the current level
  const stars = useSelector((state: IState) => {
    const currentLevel = state.game.levels.find(
      (level) => level.id === state.game.selectedLevelId,
    );

    if (!currentLevel) {
      throw new Error('No level found');
    }

    return currentLevel.stars;
  });

  //  Get the number of moves that have currently been made for this level
  const noOfMovesMade = useSelector(
    (state: IState) =>
      state.game.gameStateHistory.length - (state.game.undoing ? 2 : 1),
  );

  return (
    <Wrapper>
      {[...Array(stars['3'])].map((i, index) => (
        <Star
          key={`star-${index}`}
          used={index < noOfMovesMade}
          large={Object.values(stars).includes(index + 1)}
        >
          {Object.values(stars).includes(index + 1) && (
            <Number>{3 - Object.values(stars).indexOf(index + 1)}</Number>
          )}
        </Star>
      ))}
    </Wrapper>
  );
};

export default memo(Stars);

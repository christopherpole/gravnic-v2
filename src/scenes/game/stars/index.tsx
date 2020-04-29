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

  //  Get the current record for the number of moves
  const currentProgress = useSelector(
    (state: IState) =>
      state.user.progress[state.game.selectedLevelId as string],
  );

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

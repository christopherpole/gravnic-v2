import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import IState from '@/types/state';
import { disabledColorScheme } from '@/data/colorSchemes';
import Star from '@/components/star';
import MoveCounter from './moveCounter';

const Wrapper = styled(View)`
  flex-direction: row;
  width: 100%;
  flex: 1;
`;

const MoveWrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  margin: 0 10px;
`;

const MoveCounterWrapper = styled(View)`
  height: 15px;
  width: 15px;
`;

const StarWrapper = styled(View)`
  height: 30px;
  width: 30px;
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

  //  Get the current level's colour scheme
  const colorScheme = useSelector(
    ({ game: { selectedLevelIndex, levels } }: IState) =>
      selectedLevelIndex !== null
        ? levels[selectedLevelIndex].colorScheme
        : disabledColorScheme,
  );

  if (!stars) return null;

  return (
    <Wrapper>
      {[...Array(stars[2])].map((i, index) => (
        <MoveWrapper>
          {(!stars.includes(index + 1) || currentProgress <= index + 1) && (
            <MoveCounterWrapper key={`move-counter-${index}`}>
              <MoveCounter
                color={
                  index < noOfMovesMade
                    ? colorScheme.moveCounter.used
                    : colorScheme.moveCounter.new
                }
              />
            </MoveCounterWrapper>
          )}
          {/* && currentProgress < index + 1  */}
          {stars.includes(index + 1) &&
            (!currentProgress || currentProgress > index + 1) && (
              <StarWrapper>
                <Star
                  color={
                    index >= noOfMovesMade
                      ? colorScheme.moveCounter.new
                      : colorScheme.moveCounter.used
                  }
                />
              </StarWrapper>
            )}
        </MoveWrapper>
      ))}
    </Wrapper>
  );
};

export default memo(Stars);

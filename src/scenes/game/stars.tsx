import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import {
  selectNoOfMovesMade,
  selectCurrentLevelStars,
  selectCurrentLevelProgress,
  selectCurrentColorScheme,
} from '@/selectors';
import { FEATURES, ENABLED_FEATURES } from '@/config';
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
  const stars = useSelector(selectCurrentLevelStars);
  const noOfMovesMade = useSelector(selectNoOfMovesMade);
  const currentProgress = useSelector(selectCurrentLevelProgress);
  const colorScheme = useSelector(selectCurrentColorScheme);
  let newStarOverrideColor: string | undefined;
  let usedStarOverrideColor: string | undefined;

  if (!stars) return null;

  if (ENABLED_FEATURES.includes(FEATURES.COLORED_STARS)) {
    newStarOverrideColor = colorScheme.moveCounter.new;
    usedStarOverrideColor = colorScheme.moveCounter.used;
  }

  return (
    <Wrapper>
      {[...Array(stars[2])].map((i, index) => (
        <MoveWrapper key={`move-counter-wrapper-${index}`}>
          {(!stars.includes(index + 1) || currentProgress <= index + 1) && (
            <MoveCounterWrapper>
              <MoveCounter
                filled={index < noOfMovesMade}
                color={
                  index < noOfMovesMade
                    ? usedStarOverrideColor
                    : newStarOverrideColor
                }
              />
            </MoveCounterWrapper>
          )}

          {stars.includes(index + 1) &&
            (!currentProgress || currentProgress > index + 1) && (
              <StarWrapper>
                <Star
                  filled={index >= noOfMovesMade}
                  color={
                    index >= noOfMovesMade
                      ? newStarOverrideColor
                      : usedStarOverrideColor
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

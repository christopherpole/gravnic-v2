import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import {
  selectNoOfMovesMade,
  selectCurrentLevelStars,
  selectCurrentLevelProgress,
} from '@/selectors';
import Star from '@/components/star';
import MoveCounter from './moveCounter';

const Wrapper = styled(View)`
  flex-direction: row;
  width: 100%;
  flex: 1;
`;

const MoveWrapper = styled(View)`
  display: flex;
  height: ${(props) => props.theme.sizing.extraLarge};
  align-items: center;
  justify-content: center;
  margin: 0 ${(props) => props.theme.spacing.small};
`;

//  @todo - revise
const MoveCounterWrapper = styled(View)`
  height: ${(props) =>
    `${parseInt(props.theme.sizing.extraLarge.replace('px', ''), 10) / 2}`};
  width: ${(props) =>
    `${parseInt(props.theme.sizing.extraLarge.replace('px', ''), 10) / 2}`};
`;

const StarWrapper = styled(View)`
  height: ${(props) => props.theme.sizing.extraLarge};
  width: ${(props) => props.theme.sizing.extraLarge};
`;

const Stars = () => {
  const stars = useSelector(selectCurrentLevelStars);
  const noOfMovesMade = useSelector(selectNoOfMovesMade);
  const currentProgress = useSelector(selectCurrentLevelProgress);

  if (!stars) return null;

  return (
    <Wrapper>
      {[...Array(stars[2])].map((i, index) => (
        <MoveWrapper key={`move-counter-wrapper-${index}`}>
          {(!stars.includes(index + 1) || currentProgress <= index + 1) && (
            <MoveCounterWrapper>
              <MoveCounter filled={index >= noOfMovesMade} />
            </MoveCounterWrapper>
          )}

          {stars.includes(index + 1) &&
            (!currentProgress || currentProgress > index + 1) && (
              <StarWrapper>
                <Star filled={index >= noOfMovesMade} />
              </StarWrapper>
            )}
        </MoveWrapper>
      ))}
    </Wrapper>
  );
};

export default memo(Stars);

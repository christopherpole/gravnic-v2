import React, { memo } from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import IState from '@/types/state';

const Wrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-color: black;
  border-bottom-width: 2px;
`;

const StarsCountText = styled(Text)`
  padding: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.sizing.large};
  color: red;
`;

const Progress = () => {
  //  Get the total number of stars available
  const totalStarsCount = useSelector(
    (state: IState) => state.game.levels.length * 3,
  );

  //  Get the number of stars the user has achieved so far
  const userStarsCount = useSelector(
    ({ user: { progress }, game: { levels } }: IState) => {
      let count = 0;

      //  Check the number of stars we've got for each level
      Object.keys(progress).forEach((key) => {
        const level = levels[parseInt(key, 10)];

        if (level) {
          //  @TODO: revise the structure of "stars" for the levels
          count += level.stars.filter(
            (star) => progress[parseInt(key, 10)] <= star,
          ).length;
        }
      });

      return count;
    },
  );

  return (
    <Wrapper>
      <StarsCountText>
        {userStarsCount}/{totalStarsCount}
      </StarsCountText>
    </Wrapper>
  );
};

export default memo(Progress);

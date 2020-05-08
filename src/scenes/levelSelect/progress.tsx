import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import IState from '@/types/state';
import Text from '@/components/text';
import Star from '@/components/star';

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StarIconContainer = styled(View)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const StarsCountText = styled(Text)`
  font-size: ${(props) => props.theme.sizing.large};
  font-family: ${(props) => props.theme.fonts.bold};
  margin: 0;
  color: white;
  padding-top: 3px;
  box-shadow: ${(props) => props.theme.shadows.default};
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
      <StarIconContainer>
        <Star color="white" />
      </StarIconContainer>

      <StarsCountText>
        {userStarsCount}/{totalStarsCount}
      </StarsCountText>
    </Wrapper>
  );
};

export default memo(Progress);

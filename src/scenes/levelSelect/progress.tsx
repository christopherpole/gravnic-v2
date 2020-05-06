import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import IState from '@/types/state';
import Text from '@/components/text';
import StarIcon from '@/components/icons/star';

const Wrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  background: #333;
`;

const StarIconContainer = styled(View)`
  width: 6%;
  aspect-ratio: 1;
  margin-right: 3%;
`;

const StarsCountText = styled(Text)`
  font-size: ${(props) => props.theme.sizing.large};
  font-family: ${(props) => props.theme.fonts.bold};
  padding: 5% 0 4%;
  margin: 0;
  color: white;
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
        <StarIcon color="white" />
      </StarIconContainer>
      <StarsCountText>
        {userStarsCount}/{totalStarsCount}
      </StarsCountText>
    </Wrapper>
  );
};

export default memo(Progress);

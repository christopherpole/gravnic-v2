import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTotalStars, selectAchievedStarsCount } from '@/selectors';
import Text from '@/components/text';
import StarIcon from '@/components/icons/star';

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
  const totalStarsCount = useSelector(selectTotalStars);
  const userStarsCount = useSelector(selectAchievedStarsCount);

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

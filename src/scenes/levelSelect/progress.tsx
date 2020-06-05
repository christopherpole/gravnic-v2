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
  width: ${(props) => props.theme.sizing.large};
  height: ${(props) => props.theme.sizing.large};
  margin-right: ${(props) => props.theme.spacing.small};
`;

const StarsCountText = styled(Text)`
  margin-top: ${(props) => props.theme.sizing.xxs};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.sizing.large};
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

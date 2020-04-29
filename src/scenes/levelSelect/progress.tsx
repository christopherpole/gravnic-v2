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
  const totalStarsCount = useSelector(
    (state: IState) => state.game.levels.length * 3,
  );
  const userStarsCount = useSelector((state: IState) =>
    Object.values(state.user.progress).reduce((a, b) => a + b, 0),
  );

  const progress = useSelector((state: IState) => state.user.progress);
  console.log(progress);

  return (
    <Wrapper>
      <StarsCountText>
        {userStarsCount}/{totalStarsCount}
      </StarsCountText>
    </Wrapper>
  );
};

export default memo(Progress);

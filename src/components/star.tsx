import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';

import StarIcon from '@/components/icons/star';

interface IProps {
  filled?: boolean;
}

const Wrapper = styled(View)<IProps>`
  height: 100%;
  width: 100%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

  ${(props) => props.filled && css``}
`;

const Star = ({ filled }: IProps) => (
  <Wrapper>
    <StarIcon color={filled ? 'yellow' : 'white'} />
  </Wrapper>
);

export default memo(Star);

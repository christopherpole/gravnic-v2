import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';

import StarIcon from '@/components/icons/star';

interface IProps {
  color?: string;
}

const Wrapper = styled(View)<IProps>`
  height: 100%;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows.default};

  ${(props) => props.color && css``}
`;

const Star = ({ color }: IProps) => (
  <Wrapper>
    <StarIcon color={color} />
  </Wrapper>
);

export default memo(Star);

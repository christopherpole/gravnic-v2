import React from 'react';
import styled, { css } from 'styled-components';
import { TouchableOpacity } from 'react-native';

import StarIcon from '@/components/icons/star';

interface IProps {
  filled?: boolean;
}

const Wrapper = styled(TouchableOpacity)<IProps>`
  height: 100%;
  width: 100%;

  ${(props) => props.filled && css``}
`;

const Star = ({ filled }: IProps) => (
  <Wrapper>
    <StarIcon color={filled ? 'yellow' : 'white'} />
  </Wrapper>
);

export default Star;

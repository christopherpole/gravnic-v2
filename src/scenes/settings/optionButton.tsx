import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import Button from '@/components/button';

const Wrapper = styled(View)`
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

const WrapperInner = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

interface IProps {
  children: React.ReactNode;
  onPress: () => void;
}

const OptionButton = ({ children, onPress, ...rest }: IProps) => (
  <Wrapper {...rest}>
    <WrapperInner onPress={onPress}>{children}</WrapperInner>
  </Wrapper>
);

export default memo(OptionButton);

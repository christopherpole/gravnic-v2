import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  border: 2px solid black;
  display: flex;
  background: white;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0;
    `}
`;

const StyledText = styled(Text)`
  font-weight: bold;
  padding: 15px 30px;
  font-size: ${(props) => props.theme.sizing.medium};
`;

interface IProps {
  onPress?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: IProps) => (
  <Wrapper {...rest}>
    <StyledText>{children}</StyledText>
  </Wrapper>
);

export default memo(Button);

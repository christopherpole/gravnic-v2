import React from 'react';
import styled, { css } from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.spacing.medium};
  border: 2px solid black;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0;
    `}
`;

const StyledText = styled(Text)`
  font-weight: bold;
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

export default Button;

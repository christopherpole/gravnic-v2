import React from 'react';
import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  flex: 1;
  aspect-ratio: 1;
  margin: 0 ${(props) => props.theme.spacing.small};
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  color: ${(props) => props.theme.colors.fonts.secondary};
`;

interface IProps {
  children: string;
}

const Button = ({ children }: IProps) => (
  <Wrapper>
    <ButtonText>{children}</ButtonText>
  </Wrapper>
);

export default Button;

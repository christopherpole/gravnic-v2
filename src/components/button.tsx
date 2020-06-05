import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium};
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0;
    `}
`;

interface IProps {
  onPress?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: IProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default memo(Button);

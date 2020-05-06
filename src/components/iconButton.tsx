import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

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

const IconButton = ({ children, ...rest }: IProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default memo(IconButton);

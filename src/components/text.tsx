import React, { memo } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

interface IProps {
  children: React.ReactNode;
}

const Wrapper = styled(Text)<IProps>`
  font-family: ${(props) => props.theme.fonts.default};
`;

const StyledText = ({ children, ...rest }: IProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default memo(StyledText);

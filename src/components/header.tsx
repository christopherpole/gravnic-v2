import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.primary};
  align-items: center;
  border-bottom-color: ${(props) => props.theme.colors.fonts.primary};
  border-bottom-width: ${(props) => props.theme.sizing.border};
  justify-content: space-between;
`;

interface IProps {
  children: React.ReactNode;
}

const Header = ({ children, ...rest }: IProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default memo(Header);

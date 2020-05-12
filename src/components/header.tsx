import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.primary};
  align-items: center;
  border-bottom-color: white;
  border-bottom-width: 2px;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.shadows.default};
`;

interface IProps {
  children: React.ReactNode;
}

const Header = ({ children, ...rest }: IProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default memo(Header);

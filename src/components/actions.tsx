import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 0 -${(props) => props.theme.spacing.small};
`;

interface IProps {
  children: React.ReactNode;
}

const Actions = ({ children }: IProps) => <Wrapper>{children}</Wrapper>;

export default Actions;

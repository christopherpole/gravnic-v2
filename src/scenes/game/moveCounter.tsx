import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

interface IProps {
  color: string;
}

const Wrapper = styled(View)<IProps>`
  height: 15px;
  width: 15px;
  background: ${(props) => props.color};
  border-radius: 999px;
  box-shadow: ${(props) => props.theme.shadows.default};
`;

const MoveCounter = (props: IProps) => <Wrapper {...props} />;

export default memo(MoveCounter);

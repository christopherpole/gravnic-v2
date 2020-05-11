import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

import useTheme from '@/hooks/useTheme';

interface IProps {
  filled?: boolean;
  color?: string;
}

const Wrapper = styled(View)<{ fillColor: string }>`
  height: 100%;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows.default};
  background: ${(props) => props.fillColor};
`;

const Star = ({ filled, ...rest }: IProps) => {
  const theme = useTheme();
  const fillColor = filled ? theme.colors.stars.new : theme.colors.stars.used;

  return <Wrapper {...rest} fillColor={fillColor} />;
};

export default memo(Star);

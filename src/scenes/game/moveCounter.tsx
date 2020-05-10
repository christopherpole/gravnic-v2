import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
// import { useSelector } from 'react-redux';

import useTheme from '@/hooks/useTheme';
// import { selectCurrentColorScheme } from '@/selectors';

const Wrapper = styled(View)<{ color?: string }>`
  height: 15px;
  width: 15px;
  border-radius: 999px;
  box-shadow: ${(props) => props.theme.shadows.default};
  background: ${(props) => props.color};
`;

interface IProps {
  filled?: boolean;
  color?: string;
}

const MoveCounter = ({ filled, color, ...rest }: IProps) => {
  const theme = useTheme();
  let fillColor = color;

  if (!fillColor) {
    fillColor = filled ? theme.colors.stars.used : theme.colors.stars.new;
  }

  return <Wrapper {...rest} color={fillColor} />;
};

export default memo(MoveCounter);

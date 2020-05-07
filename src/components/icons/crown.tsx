import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const CloseIcon = ({ color }: IProps) => (
  <Svg width="100%" height="100%" fill={color} viewBox="0 0 24 24">
    <Path d="M3 16l-3-10 7.104 4 4.896-8 4.896 8 7.104-4-3 10h-18zm0 2v4h18v-4h-18z" />
  </Svg>
);

export default memo(CloseIcon);

import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const UndoIcon = ({ color }: IProps) => (
  <Svg width="100%" height="100%" fill={color} viewBox="0 0 24 24">
    <Path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z" />
  </Svg>
);

export default memo(UndoIcon);

import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const StarIcon = ({ color }: IProps) => (
  <Svg width="100%" height="100%" fill={color} viewBox="0 0 24 24">
    <Path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </Svg>
);

export default memo(StarIcon);

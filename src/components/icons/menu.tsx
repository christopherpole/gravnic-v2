import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const MenuIcon = ({ color }: IProps) => (
  <Svg width="100%" height="100%" fill={color} viewBox="0 0 24 24">
    <Path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
  </Svg>
);

export default MenuIcon;

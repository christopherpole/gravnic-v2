import React, { memo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-native';

import useTheme from '@/hooks/useTheme';

const Wrapper = styled(Animated.View)`
  height: 15px;
  width: 15px;
  border-radius: 999px;
  /* box-shadow: ${(props) => props.theme.shadows.default}; */
`;

interface IProps {
  filled?: boolean;
}

const MoveCounter = ({ filled, ...rest }: IProps) => {
  const theme = useTheme();
  const fillAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fillAnim, {
      toValue: filled ? 1 : 0,
      duration: 200,
    }).start();
  }, [filled, fillAnim]);

  return (
    <Wrapper
      {...rest}
      style={{
        backgroundColor: fillAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [theme.colors.stars.used, theme.colors.stars.new],
        }),
      }}
    />
  );
};

export default memo(MoveCounter);

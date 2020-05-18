import React, { memo, useRef } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-native';

// import useTheme from '@/hooks/useTheme';

const Wrapper = styled(Animated.View)`
  height: 15px;
  width: 15px;
  border-radius: 999px;
  background: red;
  box-shadow: ${(props) => props.theme.shadows.default};
`;

interface IProps {
  filled?: boolean;
}

const MoveCounter = ({ filled, ...rest }: IProps) => {
  // const theme = useTheme();
  const fillAnim = useRef(new Animated.Value(1)).current;

  // useEffect(() => {
  //   Animated.timing(fillAnim, {
  //     toValue: filled ? 1 : 0,
  //     duration: 0,
  //     useNativeDriver: true,
  //   }).start();
  // }, [filled, fillAnim]);

  return (
    <Wrapper
      {...rest}
      style={{
        // opacity: fillAnim.interpolate({
        //   inputRange: [0, 1],
        //   outputRange: [theme.colors.stars.used, theme.colors.stars.new],
        // }),
        opacity: fillAnim,
      }}
    />
  );
};

export default memo(MoveCounter);

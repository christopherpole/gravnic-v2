import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { FEATURES, ENABLED_FEATURES } from '@/config';
import StarIcon from '@/components/icons/star';
import useTheme from '@/hooks/useTheme';
import { selectCurrentColorScheme } from '@/selectors';

interface IProps {
  filled?: boolean;
  newColor?: string;
  usedColor?: string;
}

const Wrapper = styled(View)<IProps>`
  height: 100%;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows.default};
`;

const Star = ({ filled, newColor, usedColor, ...rest }: IProps) => {
  const colorScheme = useSelector(selectCurrentColorScheme);

  const newFillColor = newColor || colorScheme.moveCounter.new;
  const usedFillColor = usedColor || colorScheme.moveCounter.used;
  const theme = useTheme();

  const newMoveCounterColor = ENABLED_FEATURES.includes(FEATURES.COLORED_STARS)
    ? newFillColor
    : theme.colors.stars.new;
  const usedMoveCounterColor = ENABLED_FEATURES.includes(FEATURES.COLORED_STARS)
    ? usedFillColor
    : theme.colors.stars.used;

  return (
    <Wrapper {...rest}>
      <StarIcon color={filled ? newMoveCounterColor : usedMoveCounterColor} />
    </Wrapper>
  );
};

export default memo(Star);

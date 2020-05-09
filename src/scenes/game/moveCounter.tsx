import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import IState from '@/types/state';
import { FEATURES, ENABLED_FEATURES } from '@/config';
import { disabledColorScheme } from '@/data/colorSchemes';
import useTheme from '@/hooks/useTheme';

const Wrapper = styled(View)<{ color: string }>`
  height: 15px;
  width: 15px;
  border-radius: 999px;
  box-shadow: ${(props) => props.theme.shadows.default};
  background: ${(props) => props.color};
`;

interface IProps {
  filled?: boolean;
}

const MoveCounter = ({ filled, ...rest }: IProps) => {
  //  Get the current level's colour scheme
  const colorScheme = useSelector(
    ({ game: { selectedLevelIndex, levels } }: IState) =>
      selectedLevelIndex !== null
        ? levels[selectedLevelIndex].colorScheme
        : disabledColorScheme,
  );

  const theme = useTheme();

  const newMoveCounterColor = ENABLED_FEATURES.includes(FEATURES.COLORED_STARS)
    ? colorScheme.moveCounter.new
    : theme.colors.stars.new;
  const usedMoveCounterColor = ENABLED_FEATURES.includes(FEATURES.COLORED_STARS)
    ? colorScheme.moveCounter.used
    : theme.colors.stars.used;

  return (
    <Wrapper
      {...rest}
      color={filled ? usedMoveCounterColor : newMoveCounterColor}
    />
  );
};

export default memo(MoveCounter);

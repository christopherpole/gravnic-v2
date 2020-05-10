import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { selectCurrentColorScheme } from '@/selectors';

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
  const colorScheme = useSelector(selectCurrentColorScheme);

  return (
    <Wrapper
      {...rest}
      color={
        filled ? colorScheme.moveCounter.used : colorScheme.moveCounter.new
      }
    />
  );
};

export default memo(MoveCounter);

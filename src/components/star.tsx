import React, { memo } from 'react';
import styled from 'styled-components';

import StarIcon from '@/components/icons/star';
import useTheme from '@/hooks/useTheme';

interface IProps {
  filled?: boolean;
  color?: string;
}

const Wrapper = styled(StarIcon)``;

const Star = ({ filled, ...rest }: IProps) => {
  const theme = useTheme();
  const fillColor = filled ? theme.colors.stars.new : theme.colors.stars.used;

  return <Wrapper {...rest} color={fillColor} />;
};

export default memo(Star);

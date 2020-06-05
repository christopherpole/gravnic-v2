import React, { memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setShowingSettings } from '@/actions/ui';
import CrownIcon from '@/components/icons/crown';
import OptionsIcon from '@/components/icons/options';
import IconButton from '@/components/iconButton';
import HeaderComponent from '@/components/header';
import Progress from './progress';

const StyledIconButton = styled(IconButton)`
  padding: ${(props) => props.theme.sizing.large};
  width: ${(props) =>
    parseInt(props.theme.sizing.large.replace('px', ''), 10) +
    parseInt(props.theme.sizing.large, 10) * 2};
  aspect-ratio: 1;
`;

const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderComponent>
      <StyledIconButton>
        <CrownIcon color="white" />
      </StyledIconButton>

      <Progress />

      <StyledIconButton
        onPress={() => {
          dispatch(setShowingSettings(true));
        }}
      >
        <OptionsIcon color="white" />
      </StyledIconButton>
    </HeaderComponent>
  );
};

export default memo(Header);

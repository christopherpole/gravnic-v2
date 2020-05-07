import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { setShowingSettings } from '@/actions/ui';
import CrownIcon from '@/components/icons/crown';
import OptionsIcon from '@/components/icons/options';
import IconButton from '@/components/iconButton';
import Progress from './progress';

const Wrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  background: #333;
  padding: 15px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const StyledIconButton = styled(IconButton)`
  height: 20px;
  width: 20px;
`;

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default memo(Header);

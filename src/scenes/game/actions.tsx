import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { resetLevel, setUndoing } from '@/actions/game';
import { setShowingSettings, setShowingLevelSelect } from '@/actions/ui';
import IconButton from '@/components/iconButton';
import UndoIcon from '@/components/icons/undo';
import RestartIcon from '@/components/icons/restart';
import OptionsIcon from '@/components/icons/options';
import { selectMoveMade, selectColorScheme } from '@/selectors';
import MenuIcon from '@/components/icons/menu';

const Wrapper = styled(View)`
  flex-direction: row;
  display: flex;
  padding: ${(props) => props.theme.spacing.large};
  padding-top: 0;
  width: 100%;
  justify-content: space-between;
`;

const IconButtonWrapper = styled(View)`
  aspect-ratio: 1;
  width: 15%;
`;

const Actions = () => {
  const dispatch = useDispatch();
  const showGameButtons = useSelector(selectMoveMade);
  //  @ts-ignore - no idea why this is playing up
  const colorScheme = useSelector(selectColorScheme);

  return (
    <Wrapper>
      <IconButtonWrapper>
        <IconButton
          onPress={() => {
            dispatch(setShowingLevelSelect(true));
          }}
        >
          <MenuIcon color={colorScheme.icons} />
        </IconButton>
      </IconButtonWrapper>

      <IconButtonWrapper>
        <IconButton
          disabled={!showGameButtons}
          onPress={() => {
            dispatch(setUndoing(true));
          }}
        >
          <UndoIcon color={colorScheme.icons} />
        </IconButton>
      </IconButtonWrapper>

      <IconButtonWrapper>
        <IconButton
          disabled={!showGameButtons}
          onPress={() => {
            dispatch(resetLevel());
          }}
        >
          <RestartIcon color={colorScheme.icons} />
        </IconButton>
      </IconButtonWrapper>
      <IconButtonWrapper>
        <IconButton
          onPress={() => {
            dispatch(setShowingSettings(true));
          }}
        >
          <OptionsIcon color={colorScheme.icons} />
        </IconButton>
      </IconButtonWrapper>
    </Wrapper>
  );
};

export default memo(Actions);

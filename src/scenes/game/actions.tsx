import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { resetLevel, setUndoing } from '@/actions/game';
import { setShowingSettings, setShowingLevelSelect } from '@/actions/ui';
import IconButton from '@/components/iconButton';
import IState from '@/types/state';
import UndoIcon from '@/components/icons/undo';
import RestartIcon from '@/components/icons/restart';
import OptionsIcon from '@/components/icons/options';
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
  height: 40px;
  width: 40px;
`;

const Actions = () => {
  const dispatch = useDispatch();

  //  Should we show the restart/undo buttons?
  const showGameButtons = useSelector(
    ({ game: { gameStateHistory, undoing } }: IState) =>
      gameStateHistory.length > (undoing ? 2 : 1),
  );

  return (
    <Wrapper>
      <IconButtonWrapper>
        <IconButton
          onPress={() => {
            dispatch(setShowingLevelSelect(true));
          }}
        >
          <MenuIcon />
        </IconButton>
      </IconButtonWrapper>

      <IconButtonWrapper>
        <IconButton
          disabled={!showGameButtons}
          onPress={() => {
            dispatch(setUndoing(true));
          }}
        >
          <UndoIcon />
        </IconButton>
      </IconButtonWrapper>

      <IconButtonWrapper>
        <IconButton
          disabled={!showGameButtons}
          onPress={() => {
            dispatch(resetLevel());
          }}
        >
          <RestartIcon />
        </IconButton>
      </IconButtonWrapper>
      <IconButtonWrapper>
        <IconButton
          onPress={() => {
            dispatch(setShowingSettings(true));
          }}
        >
          <OptionsIcon />
        </IconButton>
      </IconButtonWrapper>
    </Wrapper>
  );
};

export default memo(Actions);

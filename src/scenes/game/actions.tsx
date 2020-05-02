import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { resetLevel, setUndoing } from '@/actions/game';
import { setShowingSettings, setShowingLevelSelect } from '@/actions/ui';
import Button from '@/components/button';
import IState from '@/types/state';
import undoImg from '@/assets/undo.png';
import menuImg from '@/assets/menu.png';
import settingsImg from '@/assets/settings.png';

const Wrapper = styled(View)`
  flex-direction: row;
  display: flex;
  padding-bottom: ${(props) => props.theme.spacing.large};
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
      <Button
        onPress={() => {
          dispatch(setShowingLevelSelect(true));
        }}
        image={menuImg}
      />
      <Button
        disabled={!showGameButtons}
        onPress={() => {
          dispatch(setUndoing(true));
        }}
        image={undoImg}
      />
      <Button
        disabled={!showGameButtons}
        onPress={() => {
          dispatch(resetLevel());
        }}
        image={undoImg}
      />
      <Button
        onPress={() => {
          dispatch(setShowingSettings(true));
        }}
        image={settingsImg}
      />
    </Wrapper>
  );
};

export default memo(Actions);

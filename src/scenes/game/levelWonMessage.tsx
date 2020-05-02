import React, { memo } from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

import IState from '@/types/state';
import { loadLevel } from '@/actions/game';
import Button from '@/components/button';
import LevelMessage from './levelMessage';

const LevelWonMessage = () => {
  const dispatch = useDispatch();

  const currentLevelIndex = useSelector(
    ({ game: { selectedLevelIndex } }: IState) => selectedLevelIndex,
  );

  const hasNextLevel = useSelector(
    ({ game: { selectedLevelIndex, levels } }: IState) =>
      selectedLevelIndex === null || selectedLevelIndex < levels.length - 1,
  );

  return (
    <LevelMessage>
      <Text>
        <FormattedMessage id="youveWon" />
      </Text>
      {hasNextLevel && (
        <Button
          onPress={() => {
            dispatch(loadLevel((currentLevelIndex as number) + 1));
          }}
        >
          <FormattedMessage id="nextLevel" />
        </Button>
      )}
    </LevelMessage>
  );
};

export default memo(LevelWonMessage);

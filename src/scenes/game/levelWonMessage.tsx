import { FormattedMessage } from 'react-intl';
import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import IState from '@/types/state';
import { loadLevel } from '@/actions/game';
import Button from '@/components/button';
import Text from '@/components/text';
import LevelMessage from './levelMessage';

const StyledText = styled(Text)`
  font-size: ${(props) => props.theme.sizing.medium};
  margin-bottom: 20px;
`;

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
      <StyledText>
        <FormattedMessage id="youveWon" />
      </StyledText>
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

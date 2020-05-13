import { FormattedMessage } from 'react-intl';
import React, { memo } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { loadLevel } from '@/actions/game';
import Button from '@/components/button';
import Text from '@/components/text';
import Star from '@/components/star';
import {
  selectCurrentLevelIndex,
  selectCurrentLevelStars,
  selectHasNextLevel,
  selectCurrentLevelProgress,
} from '@/selectors';
import LevelMessage from './levelMessage';

const StyledText = styled(Text)`
  font-size: ${(props) => props.theme.sizing.large};
  margin-bottom: 10px;
`;

const StarsWrapper = styled(View)`
  display: flex;
  width: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledStar = styled(Star)`
  height: 30px;
  width: 30px;
  margin: 0 5px;
`;

const LevelWonMessage = () => {
  const dispatch = useDispatch();
  const currentLevelIndex = useSelector(selectCurrentLevelIndex);
  const currentLevelStars = useSelector(selectCurrentLevelStars);
  const hasNextLevel = useSelector(selectHasNextLevel);
  const currentLevelProgress = useSelector(selectCurrentLevelProgress);

  if (!currentLevelStars) return null;

  return (
    <LevelMessage>
      <StyledText>
        <FormattedMessage id="youveWon" />
      </StyledText>

      <StarsWrapper>
        <StyledStar filled={currentLevelProgress <= currentLevelStars[2]} />
        <StyledStar filled={currentLevelProgress <= currentLevelStars[1]} />
        <StyledStar filled={currentLevelProgress <= currentLevelStars[0]} />
      </StarsWrapper>

      {hasNextLevel && (
        <Button
          onPress={() => {
            dispatch(loadLevel((currentLevelIndex as number) + 1));
          }}
        >
          <Text>
            <FormattedMessage id="nextLevel" />
          </Text>
        </Button>
      )}
    </LevelMessage>
  );
};

export default memo(LevelWonMessage);

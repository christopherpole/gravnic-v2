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
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

const StarsWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

const StarWrapper = styled(View)`
  height: ${(props) => props.theme.sizing.large};
  width: ${(props) => props.theme.sizing.large};
  margin: 0
    ${(props) =>
      `${parseInt(props.theme.spacing.small.replace('px', ''), 10) / 2}px`};
`;

const StyledButton = styled(Button)`
  background: ${(props) => props.theme.colors.secondary};
  padding: ${(props) =>
    `${props.theme.spacing.medium} ${props.theme.spacing.large}`};
`;

const ButtonText = styled(Text)`
  font-size: ${(props) => props.theme.sizing.small};
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
        <StarWrapper>
          <Star filled={currentLevelProgress <= currentLevelStars[2]} />
        </StarWrapper>
        <StarWrapper>
          <Star filled={currentLevelProgress <= currentLevelStars[1]} />
        </StarWrapper>
        <StarWrapper>
          <Star filled={currentLevelProgress <= currentLevelStars[0]} />
        </StarWrapper>
      </StarsWrapper>

      {hasNextLevel && (
        <StyledButton
          onPress={() => {
            dispatch(loadLevel((currentLevelIndex as number) + 1));
          }}
        >
          <ButtonText>
            <FormattedMessage id="nextLevel" />
          </ButtonText>
        </StyledButton>
      )}
    </LevelMessage>
  );
};

export default memo(LevelWonMessage);

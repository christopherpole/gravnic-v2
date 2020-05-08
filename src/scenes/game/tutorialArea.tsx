import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import IState from '@/types/state';
import Text from '@/components/text';
import ITutorial from '@/types/tutorials';

const Wrapper = styled(View)``;

const TutorialText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.sizing.large};
  margin-bottom: ${(props) => props.theme.spacing.large};
  text-align: center;
`;

interface IProps {
  tutorial?: ITutorial;
}

const TutorialArea = ({ tutorial }: IProps) => {
  let message;

  const levelCompleted = useSelector(
    ({ game: { selectedLevelIndex }, user: { progress } }: IState) =>
      selectedLevelIndex !== null && progress[selectedLevelIndex] > 0,
  );

  if (!tutorial || levelCompleted) return null;

  switch (tutorial) {
    case 'INTRO':
      message = <FormattedMessage id="tutorials_intro" />;
      break;
    default:
  }

  return (
    <Wrapper>
      <TutorialText>{message}</TutorialText>
    </Wrapper>
  );
};

export default memo(TutorialArea);

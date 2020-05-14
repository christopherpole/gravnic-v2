import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import { selectCurrentLevelCompleted, selectShowTutorials } from '@/selectors';
import Text from '@/components/text';
import ITutorial from '@/types/tutorial';

const Wrapper = styled(View)``;

const TutorialText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.sizing.large};
  margin-bottom: ${(props) => props.theme.spacing.large};
  text-align: center;
`;

const TutorialArea = ({ translationKey }: ITutorial) => {
  const levelCompleted = useSelector(selectCurrentLevelCompleted);
  const showTutorials = useSelector(selectShowTutorials);

  if (!showTutorials || levelCompleted) return null;

  return (
    <Wrapper>
      <TutorialText>
        <FormattedMessage id={translationKey} />
      </TutorialText>
    </Wrapper>
  );
};

export default memo(TutorialArea);

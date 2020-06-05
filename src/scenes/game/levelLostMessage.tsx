import React, { memo } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Text from '@/components/text';
import LevelMessage from './levelMessage';

const StyledText = styled(Text)``;

const LevelLostMessage = () => (
  <LevelMessage>
    <StyledText>
      <FormattedMessage id="outOfMoves" />
    </StyledText>
  </LevelMessage>
);

export default memo(LevelLostMessage);

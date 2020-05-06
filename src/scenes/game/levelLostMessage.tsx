import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import Text from '@/components/text';
import LevelMessage from './levelMessage';

const LevelLostMessage = () => (
  <LevelMessage>
    <Text>
      <FormattedMessage id="youveLost" />
    </Text>
  </LevelMessage>
);

export default memo(LevelLostMessage);

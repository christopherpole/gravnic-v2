import React, { memo } from 'react';
import { Text } from 'react-native';
import { FormattedMessage } from 'react-intl';

import LevelMessage from './levelMessage';

const LevelLostMessage = () => (
  <LevelMessage>
    <Text>
      <FormattedMessage id="youveLost" />
    </Text>
  </LevelMessage>
);

export default memo(LevelLostMessage);

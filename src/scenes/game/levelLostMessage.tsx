import React, { memo } from 'react';
import { Text } from 'react-native';

import LevelMessage from './levelMessage';

const LevelLostMessage = () => (
  <LevelMessage>
    <Text>You suck</Text>
  </LevelMessage>
);

export default memo(LevelLostMessage);

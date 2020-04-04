import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { registerRootComponent } from 'expo';

import SSS from '@/sss';

const Wrapper = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: yellow;
`;

const App = () => {
  return (
    <Wrapper>
      <SSS />
    </Wrapper>
  );
};

export default registerRootComponent(App);

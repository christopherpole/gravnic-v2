import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme from '@/theme';
// import GameScene from '@/scenes/game';
import LevelSelectScene from '@/scenes/levelSelect';
import store from '@/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LevelSelectScene />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

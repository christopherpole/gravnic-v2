import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme from '@/theme';
import Game from '@/scenes/game';
import store from '@/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Game />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

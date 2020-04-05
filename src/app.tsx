import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/theme';
import Game from '@/scenes/game';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  );
};

export default App;

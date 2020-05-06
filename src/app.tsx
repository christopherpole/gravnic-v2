import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import theme from '@/theme';
import Settings from '@/scenes/settings';
import GameScene from '@/scenes/game';
import LevelSelectScene from '@/scenes/levelSelect';
import IntlProvider from '@/components/intlProvider';
import { store, persistor } from '@/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <IntlProvider>
            <StatusBar hidden />
            <GameScene />
            <LevelSelectScene />

            <Settings />
          </IntlProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

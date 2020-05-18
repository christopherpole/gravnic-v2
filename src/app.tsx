import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Settings from '@/scenes/settings';
import GameScene from '@/scenes/game';
import ThemeProvider from '@/components/themeProvider';
import LevelSelectScene from '@/scenes/levelSelect';
import IntlProvider from '@/components/intlProvider';
import { loadSounds } from '@/utils/sounds';
import { store, persistor } from '@/store';

const App = () => {
  useEffect(() => {
    loadSounds();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
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

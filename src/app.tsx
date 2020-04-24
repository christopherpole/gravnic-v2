import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';

import theme from '@/theme';
import Settings from '@/scenes/settings';
import GameScene from '@/scenes/game';
import LevelSelectScene from '@/scenes/levelSelect';
import IntlProvider from '@/components/intlProvider';
import { store, persistor } from '@/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <IntlProvider>
            <NavigationContainer>
              <Stack.Navigator headerMode="none" initialRouteName="Game">
                <Stack.Screen name="LevelSelect" component={LevelSelectScene} />
                <Stack.Screen name="Game" component={GameScene} />
              </Stack.Navigator>
              <Settings />
            </NavigationContainer>
          </IntlProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

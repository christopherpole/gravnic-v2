import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '@/theme';
import GameScene from '@/scenes/game';
import LevelSelectScene from '@/scenes/levelSelect';
import store from '@/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="LevelSelect">
            <Stack.Screen name="LevelSelect" component={LevelSelectScene} />
            <Stack.Screen name="Game" component={GameScene} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

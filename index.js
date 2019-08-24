/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';

const customTheme = {
  ...DefaultTheme,
  fonts: {
    regular: 'Roboto',
    medium: 'Roboto',
    light: 'Roboto',
    thin: 'Roboto',
  },
};

const Main = () => {
  return (
    <PaperProvider theme={customTheme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './components/FancyButton';

const App = props => {
  return (
    <View style={styles.AppContainer}>
      <Button>Press Me</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

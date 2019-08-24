/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.AppContainer}>
      <Button
        icon={({size, color}) => {
          return (
            <Image
              source={require('./assets/images/oil.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          );
        }}>
        Press Me
      </Button>
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

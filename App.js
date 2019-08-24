/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withTheme} from 'react-native-paper';

const App = props => {
  const {colors} = props.theme;

  return (
    <View style={styles.AppContainer}>
      <Text style={{color: colors.primary}}>Foo</Text>
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

export default withTheme(App);

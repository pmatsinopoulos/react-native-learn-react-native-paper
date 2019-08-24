/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {ActivityIndicator, Button, Colors} from 'react-native-paper';

const App = () => {
  const [load, setLoad] = useState(false);

  const buttonHandler = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };

  const button = (
    <Button
      icon={({size, color}) => {
        return (
          <Image
            source={require('./assets/images/oil.png')}
            style={{width: size, height: size, tintColor: color}}
          />
        );
      }}
      onPress={buttonHandler}>
      Press Me
    </Button>
  );

  const loading = <ActivityIndicator animating={true} color={Colors.red800} />;

  return (
    <View style={styles.AppContainer}>
      {load && loading}
      {!load && button}
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

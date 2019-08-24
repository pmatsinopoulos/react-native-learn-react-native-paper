import React from 'react';
import {Button} from 'react-native-paper';

const FancyButton = props => {
  return (
    <Button theme={{ colors: {primary: 'lightgreen'} }} {...props}>{props.children}</Button>
  );
};

export default FancyButton;

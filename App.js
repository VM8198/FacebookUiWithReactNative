import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routs from './screens/routs'



export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
     <Routs/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../header'
import Tabs from '../tabs'


export default class Menu extends React.Component {
  render() {
    return (
      <>
        <View style={styles.topView}>        
        </View>
        <Header/>
        <Tabs/>
      </>
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
  topView:{
    height:25,
    backgroundColor: '#2f55a4',
  },
});

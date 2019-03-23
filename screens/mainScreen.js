import React from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './header';
import Tabs from './tabs';
import Stories from './story';
import Feeds from './Tabs/feeds'
import WriteSomethind from './writeSomething'

export default class MainScreen extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  render() {
    return (
      <>
        <View style={styles.topView}>        
        </View>
        <ScrollView
          stickyHeaderIndices={[1]}
          refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        >
        <Header/>
        <Tabs/>
        <WriteSomethind/>
        <Stories/>
        <Feeds/>
        </ScrollView>
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

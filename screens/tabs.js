import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './header'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


export default class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (      
       <View style={styles.mainView}>
       <TouchableOpacity onPress={()=>{Actions.feeds()}}>
         <Icon name={'insert-photo'} color={this.state.color} size={35}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{Actions.friendRequest()}}>
         <Icon name={'group'} color='#000' size={35} />
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{Actions.videos()}}>
         <Icon name={'personal-video'} color='#000' size={35}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{Actions.notifications()}}>
         <Icon name={'notifications-none'} color='#000' size={35}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{Actions.menu()}}>
         <Icon name={'menu'} color='#000' size={35}/>         
       </TouchableOpacity>
       </View>      
    );
  }

}

const styles = StyleSheet.create({
  
  mainView:{
    flexDirection: 'row',
    height: 70,   
    padding: 20,
    justifyContent: 'space-between', 
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    elevation: 1,
    backgroundColor: '#fff',
  },
  border:{
    borderColor: '#000',
    borderWidth: 20,
  }
});



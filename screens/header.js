import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Camera, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';

export default class Header extends React.Component {

   constructor(props) {
    super(props);  
     
  }

   openCamera(){
     Actions.camera()
  }  
  

  render() {
    return (
      <>     
      <View style={styles.header}>      
      <View style={styles.innerView}>
      <TouchableOpacity  onPress={()=>this.openCamera()}>
        <Icon name='photo-camera' color='#fff' size={30}/>
      </TouchableOpacity>
        <View style={styles.passwordContainer}>
        <TouchableOpacity>
          <Icon
            name='search'
            color='#fff'
            size={25}
          />
          </TouchableOpacity>
          <TextInput
            style={styles.inputStyle}
              autoCorrect={false}
              placeholder="Search"
            />
        </View>
        <TouchableOpacity>
        <Icon name='message' color='#fff' size={30}/>
        </TouchableOpacity>
      </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  
  topView:{
    height:25,
    backgroundColor: '#2f55a4',
  },
  header:{
    backgroundColor: '#3b5998',
    color: '#fff',
    fontSize: 10,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  },
  
  innerView:{
    padding: 12,    
    flexDirection: 'row',
  },
  search:{
    borderBottomColor:'#fff',
    flexDirection: 'row',
    marginLeft: 10,
  },
  input:{
    borderBottomColor: '#fff',
    borderBottomWidth: 1
  },
  passwordContainer: {
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderColor: '#fff',
  width: 270,
  marginLeft: 5,
  marginRight: 5,
  paddingBottom: 3
  },
  inputStyle: {
    flex: 1,
    fontSize: 14
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

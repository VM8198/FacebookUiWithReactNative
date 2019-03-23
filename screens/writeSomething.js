import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class WriteSomething extends React.Component {
  render() {
    return (
      <>
     <View style={styles.container}>
     <TouchableOpacity>
       <Image style={styles.image} source={require('../assets/download.png')}/>
     </TouchableOpacity>
       <View style={styles.input}>
       <TextInput style={styles.inputText} placeholder='Write something here...'/>
       </View>
     <TouchableOpacity>
       <Icon name={'photo'} color='#000' size={50}/>
     </TouchableOpacity>
     </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 70,
    padding: 15
    },
  image:{
    height: 50,
    width: 50,
    borderRadius: 100
  },
  input:{
    borderColor: '#000',
    borderRadius: 50,
    height: 50,
    width: 230,
    borderWidth: 1,
    marginLeft: 5,
    color: '#000'    
  },
   inputText: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    marginLeft: 10
  },
});

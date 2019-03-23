import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import {Icon, Header, Left, Body, Button, Card, CardItem} from 'native-base';



export default class Stories extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }


array = [1,1,1,1,1,1,1,1,1,1]

      jsonData = {
        title: 'hello',
        value: 'Vivek',        
      }



  render() {
    for(let i = 0 ; i < this.array.length ; i++){
        this.state.data.push(this.jsonData)
      }
    return (
      <View style = {styles.container}>
      <View style = {styles.storyText}> 
      <Text style={{marginLeft: 10,fontWeight: 'bold'}}>Stories</Text>
      <Text style={{marginLeft: 200}}>See Archieves ></Text>
      </View>
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <FlatList
        horizontal={true}
          data={this.state.data}
          renderItem={({item}) =>
           <>
        <TouchableOpacity>
           <View>   
              <Image style={styles.image} source = {require('../assets/download.png')}/>   
              <Image style={styles.imageTop} source = {require('../assets/red.jpeg')}/>
              <Text style={styles.text}>{item.title}</Text>            
           </View>
        </TouchableOpacity>
           </>
           }
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10, 
  },
  text:{
    fontSize: 40,
    color: 'black'
  },
  imageTop:{
    height: 30,
    width: 30,
    zIndex:1,
    borderRadius: 100,
    position: 'absolute',
    left: 20,
    top: 20    
  },
  image:{
    height: 130,
    width: 80,
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  card:{
    height: 100,
    width: 200,
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 10,
    color: '#fff',
    bottom: 30,
    right: -40,
    fontWeight: 'bold'
  },
  storyText:{
    flexDirection: 'row'
  }
});
   
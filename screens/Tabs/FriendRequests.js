import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../header';
import Tabs from '../tabs';


export default class FreindRequest extends React.Component {
  render() {
    return (
      <>
      <View style={styles.topView}>        
        </View>
        <ScrollView
          stickyHeaderIndices={[1]}
        >
        <Header/>
        <Tabs/>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.freindRequest}>Friend Requests</Text>
          <View style={styles.numberOfRequests}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>10</Text>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>        
          <Image style={styles.image} source={require('../../assets/red.jpeg')}/>
          <View style={styles.text}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.mutual}>Mutual Friends</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.add}>
                <Text style={{color: '#fff'}}>CONFIRM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.remove}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row'
  },
  topView:{
    height:25,
    backgroundColor: '#2f55a4',
  },
  image:{
    height: 100,
    width: 100,
    borderRadius: 100
  },
  text:{
    marginLeft: 10
  },
  freindRequest:{
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 15,
    paddingTop: 15 
  },
  name:{
    fontWeight: 'bold',
    fontSize: 25
  },
  mutual:{
    fontSize: 15,
    color: 'grey'
  },
  add:{
    backgroundColor: '#2f55a4',
    borderRadius: 10,
    height: 40,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center'
  },
  remove:{
    backgroundColor: 'grey',
    borderRadius: 10,
    marginLeft: 10,
    height: 40,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberOfRequests:{
    backgroundColor: 'red',
    borderRadius: 100,
    height: 27,
    width: 27,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 20, 
    marginLeft: 5   
  }
});

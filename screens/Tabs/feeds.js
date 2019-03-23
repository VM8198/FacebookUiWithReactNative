import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Header,Container,Right, Left, Body, Button, Card, CardItem,Thumbnail, Content} from 'native-base';
import { ImagePicker } from 'expo';
import HeaderC from '../header'
import Tabs from '../tabs'
 
export default class Feeds extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      color: '#000',
    }
  }

  componentDidMount(){
    this.setState({color: 'blue'})
  }
  render() {
        let { image } = this.state;
    return (
      <>     
      <View  style={styles.mainView}>     
          <Card>
            <CardItem>
              <Left>
              <TouchableOpacity>
                <Thumbnail source={require('../../assets/download.png')} />
              </TouchableOpacity>
                <Body>
                <TouchableOpacity>
                  <Text style={styles.text}>Name</Text>
                  <Text note>Description</Text>
                </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <TouchableOpacity>
            <CardItem cardBody>            
              <Image source={require('../../assets/red.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="thumb-up" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="chat" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right style={{flexDirection: 'row', marginLeft: 30}}>
              <TouchableOpacity>
                <Icon active name="share" color='#00f' size={25} />
              </TouchableOpacity>
                <Text>Share</Text>
              </Right>
            </CardItem>
          </Card>

           <Card>
            <CardItem>
              <Left>
              <TouchableOpacity>
                <Thumbnail source={require('../../assets/download.png')} />
              </TouchableOpacity>
                <Body>
                <TouchableOpacity>
                  <Text style={styles.text}>Name</Text>
                  <Text note>Description</Text>
                </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <TouchableOpacity>
            <CardItem cardBody>            
              <Image source={require('../../assets/red.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="thumb-up" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="chat" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right style={{flexDirection: 'row', marginLeft: 30}}>
              <TouchableOpacity>
                <Icon active name="share" color='#00f' size={25} />
              </TouchableOpacity>
                <Text>Share</Text>
              </Right>
            </CardItem>
          </Card>

           <Card>
            <CardItem>
              <Left>
              <TouchableOpacity>
                <Thumbnail source={require('../../assets/download.png')} />
              </TouchableOpacity>
                <Body>
                <TouchableOpacity>
                  <Text style={styles.text}>Name</Text>
                  <Text note>Description</Text>
                </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <TouchableOpacity>
            <CardItem cardBody>            
              <Image source={require('../../assets/red.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="thumb-up" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="chat" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right style={{flexDirection: 'row', marginLeft: 30}}>
              <TouchableOpacity>
                <Icon active name="share" color='#00f' size={25} />
              </TouchableOpacity>
                <Text>Share</Text>
              </Right>
            </CardItem>
          </Card>

           <Card>
            <CardItem>
              <Left>
              <TouchableOpacity>
                <Thumbnail source={require('../../assets/download.png')} />
              </TouchableOpacity>
                <Body>
                <TouchableOpacity>
                  <Text style={styles.text}>Name</Text>
                  <Text note>Description</Text>
                </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <TouchableOpacity>
            <CardItem cardBody>            
              <Image source={require('../../assets/red.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="thumb-up" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="chat" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right style={{flexDirection: 'row', marginLeft: 30}}>
              <TouchableOpacity>
                <Icon active name="share" color='#00f' size={25} />
              </TouchableOpacity>
                <Text>Share</Text>
              </Right>
            </CardItem>
          </Card>

           <Card>
            <CardItem>
              <Left>
              <TouchableOpacity>
                <Thumbnail source={require('../../assets/download.png')} />
              </TouchableOpacity>
                <Body>
                <TouchableOpacity>
                  <Text style={styles.text}>Name</Text>
                  <Text note>Description</Text>
                </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <TouchableOpacity>
            <CardItem cardBody>            
              <Image source={require('../../assets/red.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="thumb-up" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="chat" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right style={{flexDirection: 'row', marginLeft: 30}}>
              <TouchableOpacity>
                <Icon active name="share" color='#00f' size={25} />
              </TouchableOpacity>
                <Text>Share</Text>
              </Right>
            </CardItem>
          </Card>

           <Card>
            <CardItem>
              <Left>
              <TouchableOpacity>
                <Thumbnail source={require('../../assets/download.png')} />
              </TouchableOpacity>
                <Body>
                <TouchableOpacity>
                  <Text style={styles.text}>Name</Text>
                  <Text note>Description</Text>
                </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <TouchableOpacity>
            <CardItem cardBody>            
              <Image source={require('../../assets/red.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="thumb-up" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                <TouchableOpacity>
                  <Icon active name="chat" color='#00f' size={25} />
                </TouchableOpacity>
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right style={{flexDirection: 'row', marginLeft: 30}}>
              <TouchableOpacity>
                <Icon active name="share" color='#00f' size={25} />
              </TouchableOpacity>
                <Text>Share</Text>
              </Right>
            </CardItem>
          </Card>
      
          
      </View>
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
  topImage:{
    borderRadius: 100,
    height: 45,
    width: 45,
    marginLeft: 10
  },
  name:{
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 15
  },
  text:{
    fontWeight: 'bold',
    fontSize: 20
  },
  mainView:{
    zIndex: -1
  }
});

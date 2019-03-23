import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './mainScreen';
import React from 'react';
import OpenCamera from './camera'
import FriendRequest from './Tabs/FriendRequests'
import Videos from './Tabs/videos'
import Notifications from './Tabs/notifications'
import Menu from './Tabs/menu'
import Feeds from './Tabs/feeds'

import { Router, Scene } from 'react-native-router-flux'



const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "main" component = {MainScreen} hideNavBar={true}    />
         <Scene key = "camera" component = {OpenCamera} hideNavBar={true}/>
         <Scene key = "feeds" component = {MainScreen} hideNavBar={true}  />
         <Scene key = "friendRequest" component = {FriendRequest} hideNavBar={true} />
         <Scene key = "videos" component = {Videos} hideNavBar={true} />
		 <Scene key = "notifications" component = {Notifications} hideNavBar={true} />
		 <Scene key = "menu" component = {Menu} hideNavBar={true} />
      </Scene>
   </Router>
)
export default Routes
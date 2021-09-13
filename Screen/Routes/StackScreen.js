import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import UserChoice from '../UserChoice';
import HomeScreen from '../HomeScreen';
import Profile from '../Profile';
import Devlopment from '../Routes/Devlopment';
import MainHomeScreen from '../MainHomeScreen';
import UserHistory from '../UserHistory';
import Data from './Data';
const Shahil = createStackNavigator();

const StackScreen = () => {
  return (
    <Shahil.Navigator>
      <Shahil.Screen component={HomeScreen} name="HomeScreen" />
      <Shahil.Screen component={Profile} name="Profile" />
      <Shahil.Screen component={Devlopment} name="Devlopment" />
      <Shahil.Screen component={MainHomeScreen} name="MainHomeScreen" />
      <Shahil.Screen component={UserHistory} name="UserHistory" />
      <Shahil.Screen component={UserChoice} name="UserChoice" />
   

       <Shahil.Screen component={StackScreen} name="StackScreen" />
    </Shahil.Navigator>
  );
};

export default StackScreen;

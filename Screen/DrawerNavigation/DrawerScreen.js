import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import Profile from "../BottomNavigation/Profile";
import BottomScreen from "../BottomNavigation/BottomScreen";
import SettingScreen from "../BottomNavigation/SettingScreen";
import checkConnected from "./NotificationScreen";
import NoConnectionScreen from "./HomeScreen";
import Figma from "./Figma";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const [connectStatus, setConnectStatus] = useState(false);
  useEffect(() => {
    NetInfo.fetch().then((res) => {
      console.log("hello my data here", res);
      setConnectStatus(res.isConnected);
    });
  }, []);

  return connectStatus ? (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="setting" component={SettingScreen} />
      <Drawer.Screen name="Figma" component={Figma} />
    </Drawer.Navigator>
  ) : (
    <NoConnectionScreen />
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function DrawerScreen() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

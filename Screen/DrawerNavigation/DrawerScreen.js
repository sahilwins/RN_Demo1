import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen";
import BottomScreen from "../BottomNavigation/BottomScreen";
import SettingScreen from "../BottomNavigation/SettingScreen"

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  //   useEffect(() => {
  //     NetInfo.fetch().then((res) => {
  //       console.log("sdasd", res.isConnected);
  //     });
  //   }, []);
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomScreen} />
      <Drawer.Screen name="Notifications" component={SettingScreen} />
      
    </Drawer.Navigator>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});

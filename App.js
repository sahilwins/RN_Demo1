import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomScreen from "./Screen/BottomNavigation/BottomScreen";
import DrawerScreen from "./Screen/DrawerNavigation/DrawerScreen";

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomScreen />   */}
      <DrawerScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

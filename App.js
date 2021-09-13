import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomScreen from "./Screen/BottomNavigation/BottomScreen";
import DrawerScreen from "./Screen/DrawerNavigation/DrawerScreen";
import StackScreen from "./Screen/Routes/StackScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Data from "./Screen/Routes/Data";

const RootStack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomScreen />   */}
      <RootStack.Navigator>
        <RootStack.Screen name="DrawerScreen" component={DrawerScreen} />
        <RootStack.Screen name="Data" component={Data} />
      </RootStack.Navigator>
      {/* <DrawerScreen /> */}
      {/* {<StackScreen/>} */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";
import Profile from "./Profile";
import Updates from "./Updates";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import PluseButton from "./PluseButton";
const Tab = createBottomTabNavigator();

const BottomScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PluseButton"
        component={PluseButton}
        options={{
          tabBarLabel: "Plus",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                top: -25,
                backgroundColor: focused ? "orange" : "black",
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <MaterialCommunityIcons name="plus" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarLabel: "Update",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomScreen;

const styles = StyleSheet.create({});

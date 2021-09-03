import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
const ExampleScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "green",
        }}
      ></View>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <Feather name="aperture" size={100} color="blue" />
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "orange",
        }}
      ></View>
    </View>
  );
};

export default ExampleScreen;

const styles = StyleSheet.create({});

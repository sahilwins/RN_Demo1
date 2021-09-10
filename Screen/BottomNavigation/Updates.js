import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image,ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Updates = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <LinearGradient
     
      colors={["#2C90FF", "#2C609A"]}
        start={{ x: 0.0, y: 0.88 }}
        end={{ x: 1.8, y: 0.5 }}
        locations={[0, 0.5]}
        
        style={styles.linearGradient}
      >
        <View>
        <ActivityIndicator size="large" color='yellow' />
        <ActivityIndicator size='small' color='white'/>
        <ActivityIndicator />
          <Image
            style={styles.face}
            source={require("../assets/applogo.png")}
          />
          <Text style={styles.buttonText}>Virtare Health</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Updates;

const styles = StyleSheet.create({
  face: {
    justifyContent: "center",
    alignSelf: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 2,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,

    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  },
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const image = require("../assets/ooo.jpg");

const PluseButton = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
        
      <ImageBackground
      
        source={image}
        style={{flex:1, justifyContent: "center" }}
      >
          <Text style={{color:'white',textAlign:'center'}}></Text>
        <TextInput style={styles.inp} placeholder="log in" />

        <TextInput
          style={{
            marginVertical: 20,
            backgroundColor: "yellow",
            marginHorizontal: 50,
            borderRadius: 20,
            height: 30,
            paddingLeft: 10,
            
          }}
          secureTextEntry
          placeholder="password"
        />

        <TouchableOpacity>
            
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              marginHorizontal: 50,
              marginTop: 10,
              backgroundColor: "silver",
              borderRadius: 10,
              overflow: "hidden",
              height: 30,
              
            }}
          >
            Submit
          </Text>
          
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default PluseButton;

const styles = StyleSheet.create({
  inp: {
    color: "black",

    backgroundColor: "yellow",
    marginHorizontal: 50,
    paddingVertical: 3,
    fontWeight: "bold",
    borderRadius: 20,
    height: 40,
    paddingLeft: 10,
    marginTop: 200,
  },
});

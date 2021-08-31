import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const UserChoice = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextInput style={{backgroundColor:"red"}} placeholder="Email adresss" />
      
        <View
          style={{
            height: 30,
            width: 100,
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Log In</Text>
        </View>
     
    </View>
  );
};

export default UserChoice;
const styles= StyleSheet.create({
  kolor:{}

})




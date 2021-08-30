import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import UserChoice from './UserChoice';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      {/* <View style={{backgroundColor:"blue",flex:0.3}}/>
                <View style={{backgroundColor:"red",flex:0.5}}/> */}
      <Text style={{fontSize: 40, color: 'purple'}}>Application Build</Text>
      <Button
        title="go to profile"
        onPress={() => navigation.navigate('Profile')}
      />

      <Button
        title="log in"
        onPress={() => navigation.navigate('Devlopment')}
      />
      <Button title="open" onPress={() => navigation.navigate('UserChoice')} />
      {/* <Button title="Run" onPress={() => navigation.navigate('StackScreen')} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;

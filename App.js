import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// import HomeScreen from './Screen/HomeScreen';
// import Development from './Screen/Routes/Devlopment';
//  import Profile from './Screen/Profile'
// import MainHomeScreen from './Screen/MainHomeScreen';

// import UserHistory from './Screen/UserHistory';
// import UserChoice from './Screen/UserChoice';
import StackScreen from './Screen/Routes/StackScreen';
import BottomScreen from './Screen/BottomNavigation/BottomScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackScreen /> */}
      <BottomScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import {View} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import StackScreen from './Screen/Routes/StackScreen';
// // import Profile from './Screen/Profile';
// import Profile from '../Profile';
// import HomeScreen from '../HomeScreen';
// import Development from './Devlopment';
// import Profile from './Screen/Profile';
// import HomeScreen from './Screen/HomeScreen';
// import Development from './Screen/Routes/Devlopment';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     // <View style={{flex:1,backgroundColor:'red'}}>

//     // </View>
//     <NavigationContainer>
//      <Stack.Navigator initialRouteName={'HomeScreen'}>
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Devlopment" component={Development} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

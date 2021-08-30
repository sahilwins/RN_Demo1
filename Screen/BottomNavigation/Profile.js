import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';

const Profile = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 'statusBar.currentHeight'}}>
      <ScrollView style={{marginHorizontal: 20, backgroundColor: 'pink'}}>
        <View style={{width: 200}}>
          <Text>{count}</Text>
        </View>
      </ScrollView>
      <Button title="login" onPress={() => setCount(count + 1)} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

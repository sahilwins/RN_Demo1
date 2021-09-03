import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { min } from "react-native-reanimated";

const Profile = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="Dec" onPress={() => setCount(Math.max(count - 1, 0))} />
      <ScrollView style={{ marginHorizontal: 20, backgroundColor: "pink" }}>
        <View style={{ width: 200 }}>
          <Text>{count}</Text>
        </View>
      </ScrollView>
      <Button title="inc" onPress={() => setCount(Math.min(count +1))} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

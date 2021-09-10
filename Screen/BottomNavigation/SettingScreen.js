
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";

const SettingScreen = () => {
  const [people, setPeople] = useState([
    { name: "laura", key: "1" },
    { name: "husky", key: "2" },
    { name: "leon", key: "3" },
    { name: "jamson", key: "4" },
    { name: "palo", key: "5" },
    { name: "freko", key: "6" },
    { name: "honk", key: "7" },
  ]);
  const RenderCard = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          marginTop: 5,
          margin:19,
          borderRadius: 15,
        }}
      >
        <Text style={styles.item}>{item.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          data={people}
          renderItem={({ item }) => <RenderCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 30,
    color: "black",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  item: {
    flex: 1,
    padding: 30,
 
  },
});

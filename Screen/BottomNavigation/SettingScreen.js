// import React from "react";
// import {
//   Text,
//   View,
//   TextInput,
//   Button,
//   SafeAreaView,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// const SettingScreen = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
//       <TextInput placeholder="value" style={styles.camp} />
//       <TouchableOpacity>
//         <Text style={styles.pop}>Ok</Text>
//       </TouchableOpacity>
//       <TextInput style={styles.pop} placeholder="length of value"></TextInput>
//     </SafeAreaView>
//   );
// };
// export default SettingScreen;
// const styles = StyleSheet.create({
//   camp: {
//     color: "black",
//     backgroundColor: "yellow",
//     marginTop: 200,
//     justifyContent: "center",
//     height: 30,
//     width: 250,
//     textAlign: "center",
//     paddingHorizontal: 10,
//   },
//   pop: {
//     backgroundColor: "#0666ac",
//     marginTop: 20,
//     justifyContent: "center",
//     backgroundColor: "pink",
//     color: "black",
//     textAlign:'center'
//   },
// });
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

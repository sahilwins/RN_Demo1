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
import { useEffect } from "react/cjs/react.development";

const Profile = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("test use effect", count);
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="Dec" onPress={() => setCount(Math.max(count - 1, 0))} />
      <ScrollView style={{ marginHorizontal: 20, backgroundColor: "pink" }}>
        <View style={{ width: 200 }}>
          <Text>{count}</Text>
        </View>
      </ScrollView>
      <Button title="inc" onPress={() => setCount(Math.min(count + 1))} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

// import React, { useState } from "react";
// import { View, Switch, StyleSheet, Text } from "react-native";

// const Profile = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(!isEnabled);

//   return (
//     <View style={[styles.container, {backgroundColor:isEnabled ? "#f5dd4b" : "#f4f3f4"}]}>
//       <Text>PRESS</Text>
//       <Switch

//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",

//   },
// });

// export default Profile;

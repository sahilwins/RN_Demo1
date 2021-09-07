// import React from "react";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// const HomeScreen = () => {
//   return (
//     <SafeAreaView>
//       <Text>hello i am home screen</Text>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        style={{ width:200,height:200, borderRadius: 20 }}
        resizeMode="contain"
        source={require("../assets/node.png")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OnPress = () => {
    if (!email) {
      alert("enter your email");
    } else if (!password) {
      alert("enter your password");
    } else {
      navigation.navigate("Data");
    }
  };

  return (
    <SafeAreaView style={styles.maineContainer}>
      <FontAwesome size={50} color="skyblue" />

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <FontAwesome
          name={"home"}
          size={40}
          style={{
            color: "black",
            alignSelf: "flex-start",
            width: 370,
            height: 200,
          }}
        />
      </TouchableOpacity>

      <View style={styles.secondaryView}>
        <Text style={styles.HelloText}>Kevin</Text>

        <Text style={{ margin: 5, alignSelf: "flex-start" }}>Welcome!</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
          style={styles.frog}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
          style={styles.frog}
        />
        <TouchableOpacity onPress={OnPress}>
          <View style={styles.LOGinView}>
            <Text style={{ color: "white" }}>Log in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              paddingHorizontal: 20,
              borderRadius: 50,
              color: "black",
              fontWeight: "bold",
              marginTop: 40,
              backgroundColor: "yellow",
            }}
          >
            Forgot password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  maineContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 20,
  },
  secondaryView: {
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frog: {
    backgroundColor: "#edeff3",
    color: "black",
    marginTop: 10,
    width: 300,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  HelloText: {
    color: "orange",
    padding: 2,
    marginBottom: 100,
    fontWeight: "bold",
    fontSize: 30,
  },
  LOGinView: {
    width: 300,
    height: 40,
    backgroundColor: "#fd5c2c",
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

// login OR register page
import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Auth = () => {
  return (
    <View style={container}>
      <Text style={text}>Hello this is the login page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 20,
  },
});
const { container, text } = styles;
export default Auth;

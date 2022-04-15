// login OR register page
import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";

const Auth = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>Hello</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  },
  text: {
    color: "#000",
    fontSize: 30,
  },
});

export default Auth;

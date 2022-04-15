import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={style.container}>
      <TextInput></TextInput>
      <StatusBar backgroundColor="blue"></StatusBar>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
});

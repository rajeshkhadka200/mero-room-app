import { View, StatusBar, Text } from "react-native";
import React from "react";
import Auth from "./screens/Auth";

export default function App() {
  return (
    <View>
      <Text>Hello</Text>
      <Auth />
      <StatusBar backgroundColor="blue"></StatusBar>
    </View>
  );
}

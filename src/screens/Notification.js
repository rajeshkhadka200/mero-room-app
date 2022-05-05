import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SingleNotif from "../components/Global/SingleNotif";

const Notification = () => {
  return (
    <ScrollView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
      }}
    >
      <View style={inner_design.container}>
        <SingleNotif />
      </View>
    </ScrollView>
  );
};
const inner_design = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

export default Notification;

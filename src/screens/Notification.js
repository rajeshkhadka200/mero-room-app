import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/Global/notif_design";
const Notification = () => {
  return (
    <ScrollView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </ScrollView>
  );
};

export default Notification;

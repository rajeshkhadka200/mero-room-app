import React from "react";
import { View, StyleSheet, Text } from "react-native";
const PeopleTab = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 50,
          position: "absolute",
          top: 100,
          left: 50,
        }}
      >
        Working on It
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "85%",
  },
});
export default PeopleTab;

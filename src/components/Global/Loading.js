import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loading = ({data}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.white_box}>
          <View style={styles.left_side}>
            <ActivityIndicator size="large" color="#5B628F" />
          </View>
          <View style={styles.right_side}>
            <Text style={styles.text}>{data}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  white_box: {
    borderRadius: 5,
    width: "90%",
    height: 130,
    backgroundColor: "#fff",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  right_side: {
    marginTop: 10,
  },
  text: {
    fontFamily: "400",
    fontSize: 15,
  },
});

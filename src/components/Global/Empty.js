import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Empty = () => {
  return (
    <View
      style={{
        width: wp("90%"),
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eeeeee",
        flex: 1,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "400",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        <ActivityIndicator size="large" color="#5B628F" />
      </Text>
    </View>
  );
};

export default Empty;

import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import MyRoomCard from "../components/myroom/MyRoomCard";

const Myroom = () => {
  return (
    <ScrollView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        marginBottom: 50,
      }}
    >
      <View
        style={{
          marginTop: 20,
        }}
      >
        <MyRoomCard
          value={{
            photo: require("../../assets/img/room1.jpg"),
            address: "Butwal Kalikanagar",
            price: "5000",
            room_id: 5,
          }}
        />
        <MyRoomCard
          value={{
            photo: require("../../assets/img/room2.jpg"),
            address: "Butwal Sukhanagar",
            price: "4000",
            room_id: 5,
          }}
        />
      </View>
    </ScrollView>
  );
};
const inner_design = StyleSheet.create({
  header_text: {
    marginVertical: 10,
    textAlign: "left",
    fontSize: 18,
    fontFamily: "400",
  },
});
export default Myroom;

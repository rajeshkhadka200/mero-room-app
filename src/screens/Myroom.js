import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import RoomCard from "../components/Global/RoomCard";

const Myroom = () => {
  const my_room = [
    {
      photo: require("../../assets/img/room1.jpg"),
      address: "Butwal Kalikanagar",
      price: "5000",
      room_id: 5,
    },
    {
      photo: require("../../assets/img/room2.jpg"),
      address: "Butwal Sukhanagar",
      price: "4000",
      room_id: 5,
    },
  ];

  const renderRooms = ({ item }) => {
    return (
      <>
        <RoomCard data={item} render_location="pro" />
      </>
    );
  };
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
        <FlatList data={my_room} renderItem={renderRooms} />
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

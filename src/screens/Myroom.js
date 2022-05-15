import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../components/Global/RoomCard";
import Nav from "../navigation/Nav";
import { ContexStore } from "../context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Myroom = ({ route }) => {
  const [token, settoken] = useState("");
  const [myRooms, setmyRooms] = useState();
  const { rooms } = useContext(ContexStore);
  useEffect(() => {
    const fetchMyRoom = async () => {
      let id = await AsyncStorage.getItem("auth_token");
    };
    fetchMyRoom();
  }, []);

  const array = rooms.filter((data) => {
    return data.token === token;
  });

  const renderRooms = ({ item }) => {
    return (
      <>
        <RoomCard data={item} render_location="my_rooms" />
      </>
    );
  };
  return (
    <>
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
          <FlatList
            data={array}
            renderItem={renderRooms}
            keyExtractor={(i) => {
              i.index;
            }}
          />
        </View>
      </ScrollView>
      <Nav active={route.name} />
    </>
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

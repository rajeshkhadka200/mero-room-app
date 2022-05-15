import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../components/Global/RoomCard";
import Nav from "../navigation/Nav";
import { ContexStore } from "../context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoContent from "../components/Global/NoContent"
import NoRooms from "../components/Global/NoRooms";

const Myroom = ({ route }) => {
  const [token, settoken] = useState("");
  const [myRooms, setmyRooms] = useState();
  const { test } = useContext(ContexStore);
  useEffect(() => {
    const fetchToken = async () => {
      let id = await AsyncStorage.getItem("auth_token");
      settoken(id);
    };
    fetchToken();
  }, []);

  const array = test.filter((data) => {
    return data.token === token;
  });

  const renderRooms = ({ item }) => {
    console.log(item);
    return (
      <>
        <RoomCard data={item} render_location="my_rooms" />
      </>
    );
  };
  const check="yes"
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
            marginVertical: 20,
          }}
        >
          <FlatList
            data={array}
            renderItem={renderRooms}
            keyExtractor={(i) => {
              i.index;
            }}
            // ListEmptyComponent={NoRooms(check)}
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

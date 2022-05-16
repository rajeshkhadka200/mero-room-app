import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../components/Global/RoomCard";
import Nav from "../navigation/Nav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import NoContent from "../components/Global/NoContent";

const Myroom = ({ route }) => {
  const [room, setRooms] = useState([]);
  useEffect(() => {
    const fetchMyRoom = async () => {
      try {
        const token = await AsyncStorage.getItem("auth_token");
        const q = query(collection(db, "rooms"), where("token", "==", token));
        onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            oprn_id: doc.id,
          }));
          setRooms(data);
        });
      } catch (error) {
        console.log("err while geting data", error);
      }
    };
    fetchMyRoom();
  }, []);

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
            marginVertical: 20,
          }}
        >
          <FlatList
            data={room}
            renderItem={renderRooms}
            keyExtractor={(i) => {
              i.index;
            }}
            ListEmptyComponent={NoContent("", "", "You don't post any Room")}
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

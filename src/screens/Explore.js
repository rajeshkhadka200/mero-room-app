import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext } from "react";
import { cardData } from "../../config/api";
import Card from "../components/Global/Card";
import Nav from "../navigation/Nav";
import { TabRouter } from "@react-navigation/native";
import { ContexStore } from "../context/Context";
const Explore = ({ route }) => {
  const { rooms } = useContext(ContexStore);
  const renderCard = ({ item }) => {
    return <Card data={item} check="yes" />;
  };
  console.log("rooms in exp", rooms);
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <FlatList
            data={rooms}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
            style={{
              marginBottom: 60,
            }}
          />
        </View>
      </ScrollView>
      <Nav active={route.name} />
    </>
  );
};

export default Explore;

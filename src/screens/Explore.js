import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { cardData } from "../../config/api";
import Card from "../components/Global/Card";
import Nav from "../navigation/Nav";
import { TabRouter } from "@react-navigation/native";
const Explore = ({ route }) => {
  const renderCard = ({ item }) => {
    return <Card data={item} check="yes" />;
  };
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
            data={cardData}
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

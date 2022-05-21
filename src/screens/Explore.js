import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext } from "react";
import { cardData } from "../../config/api";
import Card from "../components/Global/Card";
import Nav from "../navigation/Nav";
import { TabRouter } from "@react-navigation/native";
import { ContexStore } from "../context/Context";
import EmptyComp from "../components/Global/Empty";
const Explore = ({ route }) => {
  const { test } = useContext(ContexStore);
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
            keyExtractor={(index) => index.oprn_id}
            data={test}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyComp check="yes" />}
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

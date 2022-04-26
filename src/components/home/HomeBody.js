import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/home/home_body_design";
import React from "react";
import { cardData } from "../../../config/api";
import Card from "../Global/Card";
const HomeBody = () => {
  const seperator = () => {
    return <View style={styles.divider}></View>;
  };
  const renderCard = ({ item }) => {
    //for the new rooms
    return <Card data={item} />;
  };

  return (
    <>
      <View style={styles.body_wrapper}>
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <Text style={styles.new_text}>New Room</Text>
          <FlatList
            data={cardData}
            renderItem={renderCard}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(index) => index.id}
            style={styles.card_wrapper}
            ItemSeparatorComponent={seperator}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            marginVertical: 20 + 60,
          }}
        >
          <Text style={styles.new_text}>Popular Rooms</Text>
          <FlatList
            data={cardData}
            renderItem={renderCard}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(index) => index.id}
            style={styles.card_wrapper}
            ItemSeparatorComponent={seperator}
          />
        </View>
      </View>
    </>
  );
};

export default HomeBody;

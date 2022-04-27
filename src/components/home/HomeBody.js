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
            legacyImplementation={false}
            data={cardData}
            renderItem={renderCard}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(index) => index.id}
            style={styles.card_wrapper}
          />
        </View>
        <View>
          <Text style={styles.new_text}>Popular Rooms</Text>
          <FlatList
            legacyImplementation={false}
            data={cardData}
            renderItem={renderCard}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(index) => index.id}
            style={styles.card_wrapper}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            marginVertical: 20 + 60,
          }}
        >
          <Text style={styles.new_text}>Other Rooms</Text>
          <FlatList
            legacyImplementation={false}
            data={cardData}
            renderItem={renderCard}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(index) => index.id}
            style={styles.card_wrapper}
          />
        </View>
      </View>
    </>
  );
};

export default HomeBody;

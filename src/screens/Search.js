import { Text, View, FlatList } from "react-native";
import Card from "../components/Global/Card";
import { cardData } from "../../config/api";
import React from "react";
import { styles } from "../styles/search/search_design";

const Search = ({ route }) => {
  const renderCard = ({ item }) => {
    return <Card data={item} check="yes" />;
  };

  const { search } = route.params;
  return (
    <>
      <View style={styles.search_con}>
        <Text style={styles.search_text}>Result for : {search}</Text>
        <FlatList
          data={cardData}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
          style={styles.wrapper}
        />
      </View>
    </>
  );
};

export default Search;

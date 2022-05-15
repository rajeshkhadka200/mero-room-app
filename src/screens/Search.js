import { Text, View, FlatList, ScrollView } from "react-native";
import Card from "../components/Global/Card";
import { cardData } from "../../config/api";
import React from "react";
import { styles } from "../styles/search/search_design";
import NoContent from "../components/Global/NoContent";

const Search = ({ route }) => {
  const renderCard = ({ item }) => {
    return <Card data={item} check="yes" />;
  };

  const { search } = route.params;
  const { data } = route.params;
  const searchProduct = cardData.filter((val) => {
    if (search) {
      return (
        val.address.toLowerCase().includes(search.toLowerCase()) ||
        val.district.toLowerCase().includes(search.toLowerCase())
      );
    }
    return (
      val.address.toLowerCase().includes(data.toLowerCase()) ||
      val.district.toLowerCase().includes(data.toLowerCase())
    );
  });
  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.search_con}>
          {searchProduct.length > 0 ? (
            <Text style={styles.search_text}>
              Result for : {data || search}
            </Text>
          ) : null}

          <FlatList
            ListEmptyComponent={NoContent(search,`District ${data}`)}
            data={searchProduct}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
            style={styles.wrapper}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Search;

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
  const ReanderNoData = () => {
    return (
      <View
        style={{
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "500",
            fontSize: 25,
          }}
        >
          No data found for {data || search}
        </Text>
      </View>
    );
  };
  return (
    <>
      <View style={styles.search_con}>
        {searchProduct.length > 0 ? (
          <Text style={styles.search_text}>Result for : {data || search}</Text>
        ) : null}

        <FlatList
          ListEmptyComponent={ReanderNoData}
          data={searchProduct}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
          style={styles.wrapper}
        />
      </View>
    </>
  );
};

export default Search;

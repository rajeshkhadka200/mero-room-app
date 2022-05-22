import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext } from "react";
import { styles } from "../../styles/home/home_header_design";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../../context/Context";

// from notif icons to filter
const HomeHeader = () => {
  const { test } = useContext(ContexStore);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const uniqueDistrict = [...new Set(test?.map((item) => item.district))];

  const Search = () => {
    if (search === "") {
      return;
    }
    navigation.navigate("Search", {
      search,
    });
    setSearch("");
  };
  const renderDistrict = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search", {
              data: item,
            });
          }}
          style={styles.district}
        >
          <Text style={styles.disText}>{item}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.headerWrapper}>
          <View style={styles.searchCon}>
            {/* <Text style={styles.searchText}>
            Hi, {user.length > 0 ? user[0]?.name : "User"}
          </Text> */}
            <View style={styles.searchWrapper}>
              <TextInput
                value={search}
                style={styles.searchBar}
                onChangeText={(text) => setSearch(text)}
                placeholder="Start entering the address"
              />
              <TouchableOpacity style={styles.searchBtn} onPress={Search}>
                <Feather name="search" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.filterCon}>
            <Text style={styles.filterText}>Filter by District</Text>
            <View style={styles.disWrapper}>
              <FlatList
                data={uniqueDistrict}
                pagingEnabled={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderDistrict}
                keyExtractor={(index) => index}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default HomeHeader;

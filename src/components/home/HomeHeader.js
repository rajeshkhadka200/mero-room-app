import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  AsyncStorage,
} from "react-native";
import React, { useState, useContext } from "react";
import { styles } from "../../styles/home/home_header_design";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { District } from "../../../config/api.js";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../../context/Context";

// from notif icons to filter
const HomeHeader = () => {
  const [tk, setTk] = useState("");
  const { user, setUser } = useContext(ContexStore);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const Search = () => {
    navigation.navigate("Search", {
      search,
    });
    setSearch("");
  };

  return (
    <>
      <View style={styles.headerWrapper}>
        <View style={styles.searchCon}>
          <Text style={styles.searchText}>Hi, {user.givenName}</Text>
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
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              {District.slice(0, 10).map((data, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      navigation.navigate("Search", {
                        data,
                      });
                    }}
                    style={styles.district}
                  >
                    <Text style={styles.disText}>{data}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeHeader;

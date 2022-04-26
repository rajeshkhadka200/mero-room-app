import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "../../styles/home/home_header_design";
import logo from "../../../assets/svg/logo.svg";
import { SvgUri } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { District } from "../../../config/api.js";

const HomeHeader = () => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <View style={styles.headerCon}>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="notifications-outline" size={30} color="#828282" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <FontAwesome name="user-o" size={29} color="#828282" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchCon}>
          <Text style={styles.searchText}>Find the best places</Text>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchBar}
              placeholder="Start entering the address"
            />
            <TouchableOpacity style={styles.searchBtn}>
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
              {District.slice(0, 10).map((data) => {
                return (
                  <TouchableOpacity style={styles.district}>
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

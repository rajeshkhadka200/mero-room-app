import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { styles } from "../../styles/home/home_header_design";
import logo from "../../../assets/svg/logo.svg";
import { SvgUri } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { District } from "../../../config/api.js";

// from notif icons to filter
const HomeHeader = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <View style={styles.headerCon}>
            <Text style={styles.logo}>Mero Room</Text>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#828282"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchWrapper}>
            <View style={styles.actual_search}>
              <TextInput
                style={styles.searchBar}
                placeholder="Start entering the address"
              />
              <TouchableOpacity style={styles.searchBtn}>
                <Feather name="search" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.header_text}>
            <View style={styles.header_bold_text}>
              <Text style={styles.upper_bold_text}>Room in</Text>
              <Text style={styles.lower_bolder_text}>Rent</Text>
            </View>
            <Text style={styles.lower_text_small}>
              Find the best room for the comfortable lifestyle. Experience the
              Lifestyle.
            </Text>
          </View> */}

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
      </SafeAreaView>
    </>
  );
};

export default HomeHeader;

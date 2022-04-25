import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
} from "react-native";
import React from "react";
import { ContexStore } from "../context/Context";
import HomeHeader from "../components/home/HomeHeader";
import { styles } from "../styles/home/home_header_design";

const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView style={mainDesign.wrapper}>
        <HomeHeader />
      </ScrollView>
    </>
  );
};
const mainDesign = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
export default Home;

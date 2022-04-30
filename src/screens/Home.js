import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
  SafeAreaView,
} from "react-native";
import React from "react";
import { ContexStore } from "../context/Context";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";

const Home = ({ navigation }) => {
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: 10,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* from notif to filter = Home Header */}
          <HomeHeader />
          {/* frombelow filter */}
          <HomeBody />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const mainDesign = StyleSheet.create({});
export default Home;

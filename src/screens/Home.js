import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";
import { ContexStore } from "../context/Context";
const Home = ({ navigation }) => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
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

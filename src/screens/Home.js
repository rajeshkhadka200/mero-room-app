import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";
import { ContexStore } from "../context/Context";
import { userWhoApplied } from "../../config/api";
const Home = ({ navigation }) => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={false} />}
        >
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

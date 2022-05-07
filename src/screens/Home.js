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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContexStore } from "../context/Context";
const Home = ({ navigation }) => {
  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("auth_token");
    } catch (error) {
      console.log("logot err", error);
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
        }}
      >
        {/* <Button title="Auth" onPress={() => navigation.navigate("Auth")} />
        <Button title="Logout" onPress={() => Logout()} /> */}
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

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ContexStore } from "../context/Context";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = ({ navigation }) => {
  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("auth_token");
      console.log(await AsyncStorage.getItem("auth_token"));
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
        <Button title="Auth" onPress={() => navigation.navigate("Auth")} />
        <Button title="Logout" onPress={() => Logout()} />
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

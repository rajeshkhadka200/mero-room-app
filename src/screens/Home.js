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
const Home = ({ navigation }) => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
        }}
      >
        {/* <Button title="Auth" onPress={() => navigation.navigate("Auth")} />
        <Button title="Logout" onPress={() => Logout()} /> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => console.log("h3llo")}
            />
          }
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
export default Home;

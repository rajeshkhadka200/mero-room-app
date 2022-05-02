import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { ContexStore } from "../context/Context";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";

const Home = ({ navigation }) => {
  const [id, setid] = useState("");
  const fetchToken = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");
      setid(token);
    } catch (error) {
      console.log("unable to get HS", error);
    }
  };
  // fetchToken();
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: 10,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Button
            onPress={() => {
              navigation.navigate("Auth");
            }}
            title="Auth"
          />
          <Text>{id}</Text>
          <Button
            onPress={async () => {
              try {
                await AsyncStorage.removeItem("auth_token");
              } catch (error) {
                console.log("error while setting up in storage REG", error);
              }
            }}
            title="Logout"
          />
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

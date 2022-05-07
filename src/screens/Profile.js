import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Profileportion from "../components/profile/Profileportion";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../components/profile/TabNavigator";

const Profile = () => {
  return (
    <>
      <Profileportion />
      <NavigationContainer independent={true}>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Profile;

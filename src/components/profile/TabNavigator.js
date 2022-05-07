import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Like_tab from "./like_tab";
import PeopleTab from "./people_tab";

const Tab = createMaterialTopTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        tabBarPressColor: "white",
        tabBarStyle: {
          backgroundColor: "white",
          elevation: 0,
          borderBottomWidth: 1,
          borderColor: "#5B628F",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "like",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/img/like.png")}
              name="like"
              color="#5B628F"
              style={{
                tintColor: focused ? "#5B628F" : "#929191",
                marginTop: 2,
                height: 25,
                width: 29,
              }}
            />
          ),
        }}
        name="like"
        component={Like_tab}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "like",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/img/like.png")}
              name="like"
              color="#5B628F"
              style={{
                tintColor: focused ? "#5B628F" : "#748c94",
                height: 30,
                width: 36,
              }}
            />
          ),
        }}
        name="people"
        component={PeopleTab}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default TabNavigator;

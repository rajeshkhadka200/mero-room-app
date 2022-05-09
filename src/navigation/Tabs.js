import React, { useContext, useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Post from "../screens/Post";
import Myroom from "../screens/Myroom";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from "react-native";

import { ContexStore } from "../context/Context";
import { upload } from "../utils/HandleUpload";
import Explore from "../screens/Explore";

const Tab = createBottomTabNavigator();

//notification indicator
const notif = true;

const Tabs = ({ navigation }) => {
  const { user, data, img } = useContext(ContexStore);
  console.log("tabs", user);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          flex: 1,
          bottom: 0,
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "white",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerRight: () => (
            <>
              <View style={header.wrapper}>
                <TouchableOpacity style={header.headerIcon}>
                  <Ionicons
                    onPress={() => {
                      navigation.navigate("Notif");
                    }}
                    name="notifications-outline"
                    size={27}
                    color="#929191"
                  />
                  {notif ? <View style={header.dot}></View> : null}
                </TouchableOpacity>
                <TouchableOpacity
                  style={header.headerImg}
                  onPress={() => navigation.navigate("Auth")}
                >
                  {user.length > 0 ? (
                    <Image
                      style={header.avatar}
                      source={{
                        uri: user[0]?.photoUrl,
                      }}
                    />
                  ) : (
                    <Image
                      style={header.avatar}
                      source={{
                        uri: "https://scontent.fbwa3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=JnDLo_5PpjYAX8cG4vv&_nc_oc=AQmdU2hM-Q3jsox61SGyJovD3ROHCMzHtMpTPXZNREEXG3AwBGDk475naer2wpodQ1o&tn=jOFtfr9vq0GDmmko&_nc_ht=scontent.fbwa3-1.fna&oh=00_AT-XDUZmFAck3kLBwdCWYvigPPD4PkhYN01zNexQ-Ca4uA&oe=62970D78",
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </>
          ),
          headerStyle: {
            elevation: 0,
            backgroundColor: "#fff",
            height: 65,
          },
          headerTitleStyle: {
            fontFamily: "500",
            color: "rgba(0, 0, 0, 1)",
            fontSize: 28,
            marginLeft: 6,
            fontFamily: "888",
          },
          headerShown: true,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "md-home" : "ios-home-outline"}
              size={24}
              color={focused ? "#5B628F" : "#929191"}
            />
          ),
        }}
        name="Mero Room"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: "Left",
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-border"}
              size={30}
              color={focused ? "#5B628F" : "#929191"}
            />
          ),
        }}
        name="Fav"
        component={Explore}
      />

      <Tab.Screen
        options={{
          headerRight: () => (
            <Pressable onPress={() => upload(data, img)}>
              <Text style={header.btn_post}>Post</Text>
            </Pressable>
          ),
          headerStyle: {
            elevation: 0,
            borderColor: "dfdfdf",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "500",
            color: "#000",
            fontSize: 18,
            alignSelf: "center",
          },
          tabBarLabel: "Post",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "pluscircle" : "pluscircleo"}
              size={33}
              color={focused ? "#5B628F" : "#929191"}
            />
          ),
        }}
        name="New Room"
        component={Post}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            elevation: 0,
            borderBottomWidth: 1,
            borderBottomColor: "#Dfdfdf",
          },
          headerTitleStyle: {
            fontFamily: "500",
            color: "#000",
            fontSize: 18,
          },

          headerTitleAlign: "left",
          tabBarLabel: "My Room",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="bed" size={30} color="#5B628F" />
            ) : (
              <MaterialCommunityIcons
                name="bed-outline"
                size={30}
                color="#929191"
              />
            ),
        }}
        name="My Room"
        component={Myroom}
      />
      <Tab.Screen
        options={{
          headerStyle:{
            borderBottomColor:"#efefef",
            borderBottomWidth:1
          },
          headerTitleStyle:{
             fontFamily:"500",
             marginLeft:-5,
             marginTop:4
          },
          headerLeft: () => (
            <>
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign
                  style={{ marginLeft: 15 }}
                  name="arrowleft"
                  size={28}
                  color="black"
                />
              </Pressable>
            </>
          ),
          headerRight: () => (
            <>
              <MaterialIcons
                style={{ marginRight: 15 }}
                name="logout"
                size={28}
                color="black"
              />
            </>
          ),
          headerTitleAlign: "Left",
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={focused ? 27 : 24}
              color={focused ? "#5B628F" : "#929191"}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
const header = StyleSheet.create({
  headerIcon: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  dot: {
    padding: 3.2,
    backgroundColor: "#FF7700",
    borderRadius: 500,
    position: "absolute",
    right: 6,
    top: 6.5,
  },
  btn_post: {
    marginRight: 15,
    backgroundColor: "#5B628F",
    paddingHorizontal: 14,
    paddingVertical: 7,
    width: 60,
    borderRadius: 5,
    fontFamily: "500",
    color: "#fff",
  },
  wrapper: {
    flexDirection: "row",
  },
  headerImg: {
    borderColor: "#2374E1",
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 39,
    height: 39,
  },
  avatar: {
    width: 34,
    height: 33,
    borderRadius: 25.5,
  },
});

export default Tabs;

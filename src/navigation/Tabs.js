import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Post from "../screens/Post";
import Fav from "../screens/Fav";
import Detail from "../screens/Detail";
import Myroom from "../screens/Myroom";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/nav/bottomNav_design";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View,TouchableOpacity,StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Details"
        component={Detail}
      />
    </Stack.Navigator>
  );
};

//notification indicator
const notif = true;

const Tabs = () => {
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
              <TouchableOpacity style={header.headerIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={27}
                  color="#fff"
                />
               { notif ? <View style={header.dot}>
                </View> : null}
              </TouchableOpacity>
          ),
          headerStyle: {
            elevation: 0,
            backgroundColor:"#5B628F",
            height:60,
            

            
          },
          headerTitleStyle: {
            fontFamily: "500",
            color: "#fff",
            fontSize: 20,
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
          tabBarLabel: "Favourite",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-border"}
              size={30}
              color={focused ? "#5B628F" : "#929191"}
            />
          ),
        }}
        name="Fav"
        component={Fav}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Post",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "pluscircle" : "pluscircleo"}
              size={33}
              color={focused ? "#5B628F" : "#929191"}
            />
          ),
        }}
        name="Post"
        component={Post}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "My room",
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
        name="Myroom"
        component={Myroom}
      />
      <Tab.Screen
        options={{
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
const header=StyleSheet.create({
  headerIcon: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginRight:15
  },
  dot:{
    padding:3.2,
    backgroundColor:"#FF7700",
    borderRadius:500,
    position:"absolute",
    right:6,
    top:3
  }
})

export default Tabs;

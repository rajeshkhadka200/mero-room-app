import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Post from "../screens/Post";
import Fav from "../screens/Fav";
import Detail from "../screens/Detail";
import Myroom from "../screens/Myroom";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { styles } from "../styles/bottomNav_design";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Text, View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DetailsStack = () =>{
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
  )

}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          flex:1,
          position: "absolute",
          // bottom: 15,
          // left: 20,
          // right: 20,
          elevation: 0,
          backgroundColor: "white",
          // borderRadius: 15,
          height: 75,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
        <Ionicons name={focused ?"md-home": "ios-home-outline" } size={24} color={focused ? "#5B628F" : "#929191" } />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name={focused ? "favorite":  "favorite-border"} size={30} color={focused ? "#5B628F" : "#929191" } />
          ),
        }}
        name="Fav"
        component={Fav}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Post",
          tabBarIcon: ({ focused }) => (
            <AntDesign name={focused ? "pluscircle":"pluscircleo"} size={45} color={focused ? "#5B628F" : "#929191"} />
          ),

        }}
        name="Post"
        component={Post}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "My room",
          tabBarIcon: ({ focused }) => (
            focused ? <MaterialCommunityIcons name="bed" size={30} color="#5B628F" /> : <MaterialCommunityIcons name="bed-outline" size={30} color="#929191" />
          ),
        }}
        name="Myroom"
        component={Myroom}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name={focused ? "user" :"user-o"} size={focused ? 27 : 24} color={focused ? "#5B628F" : "#929191" } />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

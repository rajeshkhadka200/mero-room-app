import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Post from "../screens/Post";
import Fav from "../screens/Fav";
import Myroom from "../screens/Myroom";
import { styles } from "../styles/bottomNav_design";
import { Text, View, Image, TouchableOpacity } from "react-native";
const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
        paddingHorizontal:20
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 27.5,
          backgroundColor: "#5B628F",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          flex:1,
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          height: 75,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#5B628F",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icon/home.png")}
              name="home"
              color="#5B628F"
              resizeMode="contain"
              style={{
                tintColor: focused ? "#5B628F" : "#748c94",
              }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icon/fav.png")}
              name="room"
              color="#5B628F"
              style={{
                tintColor: focused ? "#5B628F" : "#748c94",
              }}
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
            <Image
              source={require("../../assets/icon/add.png")}
              name="add"
              color="#5B628F"
              style={{
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => {
            return <CustomTabBarButton {...props} />;
             
          },
        }}
        name="Post"
        component={Post}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "My room",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icon/room.png")}
              name="room"
              color="#5B628F"
              style={{
                tintColor: focused ? "#5B628F" : "#748c94",
              }}
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
            <Image
              source={require("../../assets/icon/profile.png")}
              name="profile"
              color="#5B628F"
              style={{
                tintColor: focused ? "#5B628F" : "#748c94",
              }}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

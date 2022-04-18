import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Post from "../screens/Post";
import Fav from "../screens/Fav";
import Myroom from "../screens/Myroom";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Fav" component={Fav} />
      <Tab.Screen name="Myroom" component={Myroom} />
    </Tab.Navigator>
  );
};

export default Tabs;

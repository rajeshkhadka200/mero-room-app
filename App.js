import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/navigation/Tabs"

//importing screen
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Post from "./src/screens/Post";
import Fav from "./src/screens/Fav";
import Myroom from "./src/screens/Myroom";


import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Tabs"
            component={Tabs}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Post"
            component={Post}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Fav"
            component={Fav}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Myroom"
            component={Myroom}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

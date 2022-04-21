import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/navigation/Tabs";

//importing screen
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Post from "./src/screens/Post";
import Fav from "./src/screens/Fav";
import Myroom from "./src/screens/Myroom";
import Otp from "./src/screens/Otp";

import { LogBox, StatusBar, ScrollView } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
import Context from "./src/context/Context";
import Login from "./src/screens/Login";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Otp"
            component={Otp}
          />
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
      </NavigationContainer> */}
      <Context>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen
              options={{ headerShown: false }}
              name="Otp"
              component={Otp}
            />
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
              name="Login"
              component={Login}
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
      </Context>
      <StatusBar style="auto" backgroundColor={"#333"} />
    </>
  );
}

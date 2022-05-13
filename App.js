import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox, StatusBar, ScrollView, Text, Image } from "react-native";
import Tabs from "./src/navigation/Tabs";

//importing screen
import Detail from "./src/screens/Detail";
import Home from "./src/screens/Home";
LogBox.ignoreLogs(["Setting a timer"]);
import Context from "./src/context/Context";

// imports fonts
import {
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  OleoScriptSwashCaps_400Regular,
  OleoScriptSwashCaps_700Bold,
} from "@expo-google-fonts/oleo-script-swash-caps";
// import app loading
import AppLoading from "expo-app-loading";
import Search from "./src/screens/Search";
import Auth from "./src/screens/Auth";
import Post from "./src/screens/Post";
import Notification from "./src/screens/Notification";
export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  // use the fonts
  let [fontsLoaded] = useFonts({
    200: Poppins_200ExtraLight,
    300: Poppins_300Light,
    400: Poppins_400Regular,
    500: Poppins_500Medium,
    600: Poppins_600SemiBold,
    700: Poppins_700Bold,
    999: OleoScriptSwashCaps_700Bold,
    888: OleoScriptSwashCaps_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Context>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen
              options={{ headerShown: false }}
              name="Tabs"
              component={Tabs}
            />
            <Stack.Screen
              name="Home"
              component={Home}
            />

            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={Auth}
            />

            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Detail"
              component={Detail}
            />
            <Stack.Screen
              options={{
                headerShown: true,
              }}
              name="Notif"
              component={Notification}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerStyle: {
                  elevation: 0,
                },
                headerTitleStyle: {
                  fontFamily: "500",
                  color: "rgba(0, 0, 0, 1)",
                  fontSize: 15,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Context>
      <StatusBar backgroundColor={"#333"} />
    </>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Register from "./src/screens/Register";
import { StatusBar } from "react-native";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { AppLoading } from "expo";
export default function App() {
  const Stack = createNativeStackNavigator();
  const { fontLoaded } = useFonts({
    bold: Poppins_300Light,
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
    semibold: Poppins_600SemiBold,
    bold: Poppins_700Bold,
  });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar backgroundColor={"blue"} />
    </>
  );
}

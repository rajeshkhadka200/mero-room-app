import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox, StatusBar, ScrollView } from "react-native";
import Tabs from "./src/navigation/Tabs";

//importing screen
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Post from "./src/screens/Post";
import Fav from "./src/screens/Fav";
import Myroom from "./src/screens/Myroom";
import Otp from "./src/screens/Otp";
import Detail from "./src/screens/Detail";
LogBox.ignoreLogs(["Setting a timer"]);
import Context from "./src/context/Context";
import Login from "./src/screens/Login";

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
// import app loading
import AppLoading from "expo-app-loading";
import Search from "./src/screens/Search";
export default function App() {
  // use the fonts
  let [fontsLoaded] = useFonts({
    200: Poppins_200ExtraLight,
    300: Poppins_300Light,
    400: Poppins_400Regular,
    500: Poppins_500Medium,
    600: Poppins_600SemiBold,
    700: Poppins_700Bold,
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
              name="Detail"
              component={Detail}
            />
            <Stack.Screen
              name="Search"
              component={Search}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Context>
      <StatusBar backgroundColor={"#333"} />
    </>
  );
}

import { Pressable } from "react-native";
import React from "react";
import { styles } from "../styles/Global/nav_design";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
//home
import Home_outline from "../../assets/svg/home_not.svg";
import Home_focused from "../../assets/svg/home_a.svg";
//explore
import Explore_outline from "../../assets/svg/explore_not.svg";
import Explore_focused from "../../assets/svg/explore_a.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Nav = ({ active }) => {
  console.log(active);
  const navigation = useNavigation();
  const redirect = (key) => {
    if (key === "Profile" || key === "Post" || key === "MyRoom") {
      let token = AsyncStorage.getItem("auth_token");
      if (token) {
        return navigation.navigate(key);
      }
      alert("Please Login to access" + key);
    }
    return navigation.navigate(key);
  };
  return (
    <Animatable.View style={styles.nav}>
      <Pressable onPress={() => redirect("Mero Room")}>
        {active === "Mero Room" ? <Home_focused /> : <Home_outline />}
      </Pressable>
      <Pressable onPress={() => redirect("Profile")}>
        {active === "Explore" ? <Explore_focused /> : <Explore_outline />}
      </Pressable>
    </Animatable.View>
  );
};

export default React.memo(Nav);

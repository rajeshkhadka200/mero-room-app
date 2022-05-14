import { View, Pressable } from "react-native";
import React from "react";
import { styles } from "../styles/Global/nav_design";
import { useNavigation } from "@react-navigation/native";
//home
import Home_outline from "../../assets/svg/home_not.svg";
import Home_focused from "../../assets/svg/home_a.svg";
//explore
import Explore_outline from "../../assets/svg/explore_not.svg";
import Explore_focused from "../../assets/svg/explore_a.svg";

const Nav = ({ active }) => {
  console.log(active);
  const navigation = useNavigation();
  const redirect = (key) => {
    console.log(key);
    navigation.navigate(key);
  };
  return (
    <View style={styles.nav}>
      <Pressable
        onPress={() => {
          redirect("Mero Room");
        }}
      >
        {active === "Mero Room" ? <Home_focused /> : <Home_outline />}
      </Pressable>
      <Pressable onPress={() => redirect("Explore")}>
        {active === "Explore" ? <Explore_focused /> : <Explore_outline />}
      </Pressable>
    </View>
  );
};

export default React.memo(Nav);

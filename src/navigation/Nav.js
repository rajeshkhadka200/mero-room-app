import { Pressable,View,StyleSheet} from "react-native";
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

//post
import Post_outline from "../../assets/svg/post_not.svg";
import Post_focused from "../../assets/svg/post_a.svg";

//room
import Room_outline from "../../assets/svg/room_not.svg";
import Room_focused from "../../assets/svg/room_a.svg";

//profile
import Profile_outline from "../../assets/svg/profile_not.svg";
import Profile_focused from "../../assets/svg/profile_a.svg";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Nav = ({ active }) => {
  console.log(active);
  const navigation = useNavigation();
  const redirect = async(key) => {
    if (key === "Profile" || key === "Post") {
      let token = await AsyncStorage.getItem("auth_token");
      if (token) {
         return navigation.navigate(key);
      }
      alert("Please Login to access" + key);
    }
    return navigation.navigate(key);
  };
  return (
    <View style={styles.nav}>
      <Pressable style={icon.btn} onPress={() => redirect("Mero Room")}>
        {active === "Mero Room" ? <Home_focused /> : <Home_outline />}
      </Pressable>
      <Pressable style={icon.btn} onPress={() => redirect("Explore")}>
        {active === "Explore" ? <Explore_focused /> : <Explore_outline />}
      </Pressable>
      <Pressable style={icon.btn} onPress={() => redirect("Post")}>
        {active === "Post" ? <Post_focused /> : <Post_outline />}
      </Pressable>
      <Pressable style={icon.btn} onPress={() => redirect("MyRoom")}>
        {active === "MyRoom" ? <Room_focused /> : <Room_outline />}
      </Pressable>
      <Pressable style={icon.btn} onPress={() => redirect("Profile")}>
        {active === "Profile" ? <Profile_focused /> : <Profile_outline />}
      </Pressable>
    </View>
  );
};
const icon = StyleSheet.create({
  btn:{
    padding:10

  }
})

export default React.memo(Nav);

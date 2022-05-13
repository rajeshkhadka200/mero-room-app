import { View, Text } from "react-native";
import React, { useContext } from "react";
import { styles } from "../styles/Global/nav_design";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ContexStore } from "../context/Context";
import { useNavigation } from "@react-navigation/native";

const Nav = ({ active }) => {
  const navigation = useNavigation();
  const redirect = (key) => {
    navigation.navigate(key);
  };
  return (
    <View style={styles.nav}>
      <View>
        <AntDesign
          onPress={() => {
            redirect("Mero Room");
          }}
          name="pluscircle"
          size={33}
          color={active === "Mero Room" ? "red" : "grey"}
        />
      </View>
      <View>
        <AntDesign
          onPress={() => {
            redirect("Explore");
          }}
          name="pluscircle"
          size={33}
          color={active === "Explore" ? "red" : "grey"}
        />
      </View>
      <View>
        <AntDesign
          onPress={() => {
            redirect("Post");
          }}
          name="pluscircle"
          size={33}
          color={active === "Post" ? "red" : "grey"}
        />
      </View>
      <View>
        <AntDesign
          onPress={() => {
            redirect("MyRoom");
          }}
          name="pluscircle"
          size={33}
          color={active === "MyRoom" ? "red" : "grey"}
        />
      </View>
      <View>
        <AntDesign
          onPress={() => {
            redirect("Profile");
          }}
          name="pluscircle"
          size={33}
          color={active === "Profile" ? "red" : "grey"}
        />
      </View>
    </View>
  );
};

export default Nav;

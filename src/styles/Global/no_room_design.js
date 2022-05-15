import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  no_content_con: {
    width: wp("100%"),
    maxHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text1: {
      marginTop:-30,
    fontFamily: "500",
    fontSize: 30,
    color:"#a1a1a1"
  },
  img: {
    width: 350,
    height: 300,
  },
});

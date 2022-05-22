import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  main_ontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  brand_name: {
    textAlign: "center",
    // fontFamily: "600",
    fontFamily: "888",
    fontSize: 40,
    marginBottom: 40,
    color: "#000",
  },
  btn: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  login_text: {
    marginLeft: 22,
    textAlign: "left",
    fontFamily: "400",
  },
  terms: {
    marginTop: 20,
    fontFamily: "400",
    alignSelf: "center",
  },
  contitions_link: {
    fontFamily: "400",
    color: "#3A6FD7",
    textAlign: "center",
  },
});

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
    fontFamily: "500",
    fontSize: 35,
    marginBottom: 25,
  },
  btn: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  login_text: {
    marginLeft: 10,
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

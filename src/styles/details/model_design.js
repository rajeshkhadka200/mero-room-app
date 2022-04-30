import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  black_screen: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 100,
  },
  white_box: {
    width: "90%",
    height: 300,
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
    zIndex: 500,
    marginHorizontal: "auto",
    marginVertical: 0,
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  //model header
  model_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  header_text: {
    fontSize: 15,
    fontFamily: "500",
  },
  cross_icon: {
    backgroundColor: "#dfdfdf",
    borderRadius: 500,
    paddingHorizontal: 1.5,
    paddingVertical: 1.5,
  },
  //person_card
  person_card: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  //   avatar
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 500,
  },
  // user name
  name: {
    fontFamily: "400",
    fontSize: 15,
  },
  left_side: {
    paddingLeft: 30,
    flexDirection: "column",
  },
  date: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.63)",
    fontFamily: "500",
  },
});

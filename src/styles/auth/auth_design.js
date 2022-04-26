import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    paddingTop: hp("10%"),
  },
  text: {
    color: "#000",
    fontSize: 30,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    backgroundColor: "#5B628F",
    width: 180,
    height: 180,
    borderRadius: 5000,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    marginTop: 10,
    fontSize: hp("6%"),
    color: "#5B628F",
    fontFamily: "600",
  },
  inputContainer: {
    paddingTop: hp("2%"),
    paddingBottom: hp("5%"),
    marginTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    width: "100%",
    width: (Dimensions.get("window").width / 100) * 100,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ffff",
    height: (Dimensions.get("window").width / 100) * 110,
  },
  input: {
    backgroundColor: "#EFEFEF",
    paddingVertical: hp("2%"),
    paddingLeft: 20,
    width: (Dimensions.get("window").width / 100) * 80,
    borderRadius: 10,
    paddingRight: 20,
    marginTop: 25,
    fontSize: hp("2%"),
    fontFamily: "400",
  },

  button: {
    width: (Dimensions.get("window").width / 100) * 80,
    backgroundColor: "#5B628F",
    borderRadius: 10,
    paddingVertical: hp("2%"),
    maxWidth: "100%",
    marginTop: 25,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: hp("2.5%"),
    fontFamily: "700",
  },
  fText: {
    marginTop: 15,
    width: "100%",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  login_btn_text: {
    fontFamily: "400",
  },
});

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
    paddingTop: hp("15%"),
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
    fontWeight: "bold",
    color: "#5B628F",
  },
  inputContainer: {
    paddingTop: hp("2%"),
    marginTop: 70,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "grey",
    flex: 2,
    width: (Dimensions.get("window").width / 100) * 100,
    alignItems: "center",
    backgroundColor: "#ffff",
    height: (Dimensions.get("window").width / 100) * 100,
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
  },
  button: {
    width: (Dimensions.get("window").width / 100) * 80,
    backgroundColor: "#5B628F",
    borderRadius: 20,
    paddingVertical: hp("2%"),
    maxWidth: "100%",
    marginTop: 40,
  },
  btnText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: hp("2.5%"),
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  fText: {
    width: "80%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    marginTop: 150,
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
    width: 330,
    height: 320,
    borderRadius: 200,
  },
  logoText: {
    marginTop: 10,
    fontSize: 50,
    fontWeight: "bold",
    color: "#5B628F",
  },
  inputContainer: {
    paddingTop: 40,
    marginTop: 70,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "grey",
    flex: 1,
    width: (Dimensions.get("window").width / 100) * 100,
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  input: {
    backgroundColor: "#EFEFEF",
    paddingVertical: 30,
    paddingLeft: 30,
    width: (Dimensions.get("window").width / 100) * 80,
    borderRadius: 30,
    paddingRight: 30,
    marginTop: 30,
    fontSize: 20,
  },
  button: {
    width: (Dimensions.get("window").width / 100) * 80,
    backgroundColor: "#5B628F",
    borderRadius: 45,
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginTop: 60,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
  fText: {
    marginTop: 5,
    flex: 1,
    flexDirection: "row",
  },
});

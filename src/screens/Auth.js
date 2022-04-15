// login OR register page
import { Dimensions } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import logo from '.../assets/logo.svg'
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
const Auth = () => {
  const { fontLoaded } = useFonts({
    medium: Poppins_500Medium,
    semibold: Poppins_600SemiBold,
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>{/* <Image source={require(logo)}/> */}</View>
        <Text style={styles.logoText}>Mero Room</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="email" style={styles.input} />
        <TextInput
          placeholder="password"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginFotter}>
        <Text style={styles.f_style}>Go back</Text>
        <Text style={styles.f_style}>Forgot password ?</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 20,
  },
  logoContainer: {
    textAlign: "center",
  },
  logo: {
    backgroundColor: "#5B628F",
    paddingVertical: 170,
    paddingHorizontal: 170,
    borderRadius: 200,
    fontFamily: "poppins",
  },
  logoText: {
    marginVertical: 35,
    fontSize: 50,
    fontWeight: "bold",
    color: "#5B628F",
  },
  inputContainer: {
    // marginTop: 100,
  },
  input: {
    backgroundColor: "#EFEFEF",
    paddingVertical: 30,
    paddingLeft: 30,
    width: 600,
    borderRadius: 30,
    // marginTop: 40,
    fontSize: 20,
    textAlign: "left",
  },
  input: {
    backgroundColor: "#EFEFEF",
    paddingVertical: 30,
    paddingLeft: 30,
    width: (Dimensions.get("window").width / 100) * 80,
    borderRadius: 30,
    marginTop: 35,
    fontSize: 20,
    textAlign: "left",
  },
  button: {
    width: (Dimensions.get("window").width / 100) * 80,
    backgroundColor: "#5B628F",
    borderRadius: 45,
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginTop: 40,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
  loginFotter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  f_style: {
    fontSize: 18,
    color: "black",
  },
});
const { container, text } = styles;
export default Auth;

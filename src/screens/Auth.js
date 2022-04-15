// login OR register page
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
// import logo from '.../assets/logo.svg'
const Auth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>{/* <Image source={require(logo)}/> */}</View>
        <Text style={styles.logoText}>Mero Room</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 30,
  },
  logoContainer: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  logo: {
    backgroundColor: "#5B628F",
    paddingVertical: 170,
    paddingHorizontal: 170,
    borderRadius: 200,
  },
  logoText: {
    marginTop: 10,
    fontSize: 50,
    fontWeight: "bold",
    color: "#5B628F",
  },
  inputContainer:{
      marginTop:100,
  },
  input:{
    backgroundColor:'#EFEFEF',
    paddingVertical:30,
    paddingLeft:30,
    width:600,
    borderWidth: 1,
    borderColor: "red",
    borderRadius:30,
    marginTop:40,
    fontSize:20,
    textAlign:'left'
  }
});

export default Auth;

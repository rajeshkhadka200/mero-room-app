// login OR register page
import { Dimensions, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import * as Animatable from 'react-native-animatable';
const logo =  require('./logo.svg')
const Auth = () => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="zoomIn" duration={1000} style={styles.logoContainer}>
        <View style={styles.logo}><Image style={styles.img} source={logo}/></View>
        <Text style={styles.logoText}>Mero Room</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" duration={1000} style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Join</Text>
        </TouchableOpacity>
        <View style={styles.fText}>
          <Text style={{ fontSize: 18}}>Forgot Password?</Text>
        </View>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    backgroundColor: "#EEEEEE",
    marginTop: 150,
  },
  text: {
    color: "#000",
    fontSize: 30,
  },
  logoContainer: {
    flex:1,
    alignItems:"center"
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
    flex:1,
    flexDirection:"row",
  },
});

export default Auth;

// login OR register page
import {
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
const Auth = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Animatable.View
            animation="zoomIn"
            duration={1000}
            style={styles.logoContainer}
          >
            <View style={styles.logo}>
              <Svg
                style={styles.svg}
                width={wp('30%')}
                height={128}
                viewBox="0 0 107 96"
                fill="none"
              >
                <Path
                  d="M90.95 35.5765V5.64706H74.9V20.3294L53.5 0L0 50.8235H16.05V96H42.8V62.1176H64.2V96H90.95V50.8235H107L90.95 35.5765ZM42.8 39.5294C42.8 33.3176 47.615 28.2353 53.5 28.2353C59.385 28.2353 64.2 33.3176 64.2 39.5294H42.8Z"
                  fill="white"
                />
              </Svg>
            </View>
            <Text style={styles.logoText}>Mero Room</Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.inputContainer}
          >
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Number" />
              {/* <Feather name="check-circle" color="green" size={25} /> */}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} secureTextEntry={false} placeholder="Password" />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Join</Text>
            </TouchableOpacity>
            <View style={styles.fText}>
              <Text style={{ fontSize: hp("2%") }}>Forgot Password?</Text>
            </View>
          </Animatable.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    marginTop: hp("20%"),
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
    width: wp("50%"),
    height: hp("25%"),
    borderRadius: 200,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    marginTop: 10,
    fontSize: hp("5%"),
    fontWeight: "bold",
    color: "#5B628F",
  },
  inputContainer: {
    paddingTop: hp("2%"),
    marginTop: 70,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
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
    paddingLeft: 30,
    width: (Dimensions.get("window").width / 100) * 80,
    borderRadius: 30,
    paddingRight: 30,
    marginTop: 20,
    fontSize: hp("2%"),
  },
  button: {
    width: (Dimensions.get("window").width / 100) * 80,
    backgroundColor: "#5B628F",
    borderRadius: 45,
    paddingVertical: hp("2%"),
    paddingHorizontal: 25,
    marginTop: 40,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: hp("2.5%"),
  },
  fText: {
    marginTop: 5,
    flex: 1,
    flexDirection: "row",
  },
  inputWrapper:{
    flexDirection:'row',
    alignItems:"center"
  }
});

export default Auth;

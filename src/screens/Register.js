// login OR register page
import { TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
import { styles } from "../styles/auth_design.js";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Auth = () => {
  const [credentails, setCredentails] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = credentails;
  const handleChange = (name, value) => {
    setCredentails({ ...credentails, [name]: value });
  };

  // register a user
  const register = async () => {
    const code = Date.now().toString().substring(9);
    const finalName = "rajesh";
    // send email
    try {
      const res = await fetch(
        `https://mail-server-mero-room.herokuapp.com/send/${email}/${finalName}/${code}`
      );
      if (res) {
        alert("done");
      }
    } catch (error) {
      alert("done err");
      console.log(error);
    }
  };
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
                width={wp("30%")}
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
              <TextInput
                onChangeText={(text) => handleChange("email", text)}
                value={credentails.email}
                style={styles.input}
                placeholder="Email"
              />
              {/* <Feather name="check-circle" color="green" size={25} /> */}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={(text) => handleChange("password", text)}
                value={credentails.password}
                style={styles.input}
                secureTextEntry={false}
                placeholder="create a password"
              />
            </View>
            <TouchableOpacity onPress={register} style={styles.button}>
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

export default Auth;

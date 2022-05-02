import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { styles } from "../styles/auth/auth_design";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { FB_KEY, GOOGLE_KEY } from "@env";
const Auth = () => {
  const googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: GOOGLE_KEY,
      });
      if (result.type === "success") {
        console.log(result);
      } else {
        console.log("cancel");
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

  async function fbLogin() {
    try {
      await Facebook.initializeAsync({
        appId: FB_KEY,
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        const user = await response.json();
        console.log(user);
      } else {
        console.log("canceled");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <>
      <View style={styles.main_ontainer}>
        <View style={styles.brand_con}>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 500,
              alignSelf: "center",
            }}
            source={require("../../assets/img/logo.png")}
          />
          <Text style={styles.brand_name}>Mero Room</Text>
        </View>
        <View style={styles.footer_con}>
          <Pressable onPress={googleLogin} style={styles.btn}>
            <Image
              style={styles.btn_img}
              source={require("../../assets/svg/google.png")}
            />
            <Text style={styles.login_text}>Continue with Google</Text>
          </Pressable>
          <Pressable onPress={fbLogin} style={styles.btn}>
            <Image
              style={styles.btn_img}
              source={require("../../assets/svg/fb.png")}
            />
            <Text style={styles.login_text}>Continue with Facebook</Text>
          </Pressable>
          <View style={styles.terms}>
            <Text>By continuing you aggree our</Text>
            <Text Text style={styles.contitions_link}>
              Terms and condition
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Auth;

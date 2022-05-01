// login OR register page
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
} from "react-native";
import { View, Text, TextInput } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import Svg, { Path } from "react-native-svg";
import { styles } from "../styles/auth/auth_design.js";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { middleware } from "../../config/Check";
const Auth = ({ navigation }) => {
  middleware.checkLogin(navigation);
  const [credentails, setCredentails] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = credentails;
  const handleChange = (name, value) => {
    setCredentails({ ...credentails, [name]: value });
  };
  // register a user
  const login = async () => {
    let user = [];
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      user.push(doc.data());
      console.log(user);
    });
    const check = user.find((data) => {
      return data.password === password;
    });
    if (user.length == 0 || check === undefined) {
      return alert("Password or Email incorrect");
    }
    await AsyncStorage.setItem("auth_details", user[0].user_id);
    navigation.navigate("Tabs");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Animatable.View
            animation="zoomIn"
            duration={1000}
            style={styles.logoContainer}
          >
            <View style={styles.logo}>
              <Svg
                style={styles.svg}
                width={120}
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
            <Text style={styles.logoText}>Login Here</Text>
          </Animatable.View>
        </View>
        <View>
          <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.inputContainer}
          >
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={(text) => handleChange("email", text)}
                value={email}
                style={styles.input}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={(text) => handleChange("password", text)}
                value={password}
                style={styles.input}
                secureTextEntry={true}
                placeholder="your password"
              />
            </View>
            <TouchableOpacity onPress={login} style={styles.button}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            {/* <Text>OR</Text> */}
            <View style={styles.fText}>
              {/* <Text style={styles.forgot_pass_text}>Reset Password?</Text> */}
              <Text style={styles.login_btn_text}>
                Don't have an account ? &nbsp;
                <Text
                  style={{
                    color: "#5B628F",
                    fontFamily: "500",
                  }}
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  Sign up
                </Text>
              </Text>
            </View>
          </Animatable.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;

// login OR register page
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Button,
} from "react-native";
import { View, Text, TextInput } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import Svg, { Path } from "react-native-svg";
import { styles } from "../styles/auth_design.js";
import { HOST_NAME } from "@env";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { middleware } from "../../config/Check";
const Auth = ({ navigation }) => {
  middleware.checkLogin(navigation);
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
    let array = [];
    // check if the email is already registered
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
    if (array.length > 0) {
      return alert("Account allready registered !");
    }
    const code = Date.now().toString().substring(9);
    const finalName = name.split(" ")[0];

    navigation.navigate("Otp", {
      name,
      email,
      password,
      code,
    });
    // send email
    try {
      const res = await axios.get(`${HOST_NAME}/${email}/${finalName}/${code}`);
    } catch (error) {
      console.log("Something went wrong !", error);
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
            <Text style={styles.logoText}>Mero Room</Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.inputContainer}
          >
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={(text) => handleChange("name", text)}
                value={name}
                style={styles.input}
                placeholder="Display Name"
              />
              {/* <Feather name="check-circle" color="green" size={25} /> */}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={(text) => handleChange("email", text)}
                value={email}
                style={styles.input}
                placeholder="Email"
              />
              {/* <Feather name="check-circle" color="green" size={25} /> */}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={(text) => handleChange("password", text)}
                value={password}
                style={styles.input}
                secureTextEntry={true}
                placeholder="create a password"
              />
            </View>
            <TouchableOpacity onPress={register} style={styles.button}>
              <Text style={styles.btnText}>Join</Text>
            </TouchableOpacity>
            <View style={styles.fText}>
              <Text style={{ fontSize: hp("2%") }}>Forgot Password?</Text>
              <Text
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={{ fontSize: hp("2%") }}
              >
                Login
              </Text>
            </View>
          </Animatable.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;

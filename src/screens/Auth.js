// login OR register page
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { styles } from "../styles/auth_design";
const logo = require("./logo.svg");
const Auth = () => {
  const { fontLoaded } = useFonts({
    medium: Poppins_500Medium,
    semibold: Poppins_600SemiBold,
  });
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="zoomIn"
        duration={1000}
        style={styles.logoContainer}
      >
        <View style={styles.logo}>
          <Image style={styles.img} source={logo} />
        </View>
        <Text style={styles.logoText}>Mero Room</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={1000}
        style={styles.inputContainer}
      >
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Join</Text>
        </TouchableOpacity>
        <View style={styles.fText}>
          <Text style={{ fontSize: 18 }}>Forgot Password?</Text>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Auth;

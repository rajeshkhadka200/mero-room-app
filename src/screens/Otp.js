import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = () => {
  const email = "utsavbhattarai007@gmail.com";
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.header}>Verification code</Text>
        <Text style={styles.subHeader}>
          Please enter the code We just send to {email}
        </Text>
      </View>
      <OTPInputView
        pinCount={4}
        style={styles.otpView}
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled={(value) => {
          console.log(value);
        }}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 150,
    paddingHorizontal: 15,
  },
  top: {
    alignItems: "center",
    marginTop: 50,
  },

  otpView: {
    width: "80%",
    height: 100,
    color: "black",
    marginTop: 60,
  },
  underlineStyleBase: {
    fontSize: 20,
    width: 60,
    height: 60,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderBottomWidth: 4,
    color: "black",
    borderBottomColor: "#5B628F",
    borderRadius: 10,
  },
  header: {
    fontSize: 40,
  },
  subHeader: {
    fontSize: 16,
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#5B628F",
    borderRadius: 45,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Otp;

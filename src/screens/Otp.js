import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from "react-native";
import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import uuid from "react-native-uuid";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const Otp = ({ route, navigation }) => {
  // handl erefresh
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const { name, email, password, code } = route.params;

  // get the otp from the storage

  const storeDB = async (id) => {
    try {
      await addDoc(collection(db, "users"), {
        email: email,
        user_id: id,
        name: name,
        password: password,
        img: "",
      });
      await AsyncStorage.setItem("auth_details", id);
      Alert.alert("Account Alert", "Account registered successfully !");
      navigation.navigate("Home");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const [userInput, setUserInput] = React.useState("");
  const handleVerify = async () => {
    if (userInput !== code) {
      return Alert.alert("OTP alert", "Invlid OTP");
    }
    const user_id = uuid.v4();
    storeDB(user_id);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.header}>Verification code</Text>
          <Text style={styles.subHeader}>
            Please enter the code We just send to {email}
          </Text>
        </View>
        <OTPInputView
          autoFocusOnLoad={false}
          placeholderCharacter="2"
          placeholderTextColor="#cfcfcf"
          pinCount={4}
          style={styles.otpView}
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeFilled={(otpCode) => {
            setUserInput(otpCode);
          }}
        />
        <TouchableOpacity onPress={handleVerify} style={styles.btn}>
          <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

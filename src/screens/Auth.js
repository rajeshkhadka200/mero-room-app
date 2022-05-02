import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/auth/auth_design";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { FB_KEY, GOOGLE_KEY } from "@env";
import { query, where, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { AsyncStorage } from "react-native";
const Auth = () => {
  const [userdata, setUserdata] = useState([]);
  const { id, email, name, photoUrl } = userdata;
  const storeDB = async (id) => {
    try {
      await addDoc(collection(db, "users"), {
        email: email,
        user_id: id,
        name: name,
        img: photoUrl,
      });
      // await AsyncStorage.setItem("auth_token", id);
      Alert.alert("Account Alert", "Account registered successfully !");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: GOOGLE_KEY,
      });

      if (result.type === "success") {
        let array = [];
        // check if the email is already registered
        const q = query(collection(db, "users"), where("user_id", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          array.push(doc.data());
        });
        if (array.length > 0) {
          // await AsyncStorage.setItem("auth_token", id);
          return alert("Account allready registered !");
        }
        console.log(array);
        //push to db
        storeDB(id);
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };
  // async function fbLogin() {
  //   try {
  //     await Facebook.initializeAsync({
  //       appId: FB_KEY,
  //     });
  //     const { type, token } = await Facebook.logInWithReadPermissionsAsync({
  //       permissions: ["public_profile"],
  //     });
  //     if (type === "success") {
  //       const response = await fetch(
  //         `https://graph.facebook.com/me?access_token=${token}`
  //       );
  //       const user = await response.json();
  //       console.log(user);
  //     } else {
  //       console.log("canceled");
  //     }
  //   } catch ({ message }) {
  //     alert(`Facebook Login Error: ${message}`);
  //   }
  // }

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
          <Pressable style={styles.btn}>
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

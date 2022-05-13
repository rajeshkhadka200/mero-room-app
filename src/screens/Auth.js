import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../styles/auth/auth_design";
import * as Google from "expo-google-app-auth";
import { FB_KEY, GOOGLE_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../config/firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContexStore } from "../context/Context";

const Auth = () => {
  const { setUser } = React.useContext(ContexStore);
  const navigation = useNavigation();
  const fetchUser = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");
      console.log("token in func", token);
      const q = query(collection(db, "users"), where("user_id", "==", token));
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUser([{ ...doc.data(), _id: doc.id }]);
        });
      });
    } catch (error) {
      console.log("err while geting data", error);
    }
  };
  const storeData = async ({ id, email, name, photoUrl }) => {
    try {
      let existing = [];
      //check if user is new or not
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        existing.push(doc.data());
      });
      if (existing.length > 0) {
        try {
          await AsyncStorage.setItem("auth_token", id);
          fetchUser();
          alert("Loged in successfully");
          navigation.navigate("Tabs");
          return;
        } catch (err) {
          console.log("err while seting login ", err);
        }
      }
      await addDoc(collection(db, "users"), {
        user_id: id,
        email,
        name,
        photoUrl,
        fav: [],
      });
      try {
        await AsyncStorage.setItem("auth_token", id);
        // setUser
        fetchUser();
        alert("sign up in successfully");
        navigation.navigate("Tabs");
        return;
      } catch (err) {
        console.log("err while seting reg", err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: GOOGLE_KEY,
      });
      if (result.type == "success") {
        storeData(result.user);
      }
    } catch ({ message }) {
      alert("err from google" + message);
    }
  };

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

import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../styles/auth/auth_design";
import * as Google from "expo-google-app-auth";
import axios from "axios";
// gogle login
import * as WebBrowser from "expo-web-browser";
import * as GoogleSingIn from "expo-auth-session/providers/google";

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
import Loading from "../components/Global/Loading";
import { makeRedirectUri } from "expo-auth-session";

const Auth = () => {
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();
  const { user, setUser } = React.useContext(ContexStore);
  if (user.length > 0) {
    return navigation.navigate("Mero Room");
  }
  const fetchUser = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");
      const q = query(
        collection(db, "users"),
        where("auth_token", "==", token)
      );
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUser([{ ...doc.data(), oprn_id: doc.id }]);
        });
      });
    } catch (error) {
      console.log("err while geting data", error);
    }
  };
  const storeData = async ({ id, email, name, picture }) => {
    try {
      setloading(true);
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
          setloading(false);
          return navigation.navigate("Mero Room");
        } catch (err) {
          console.log("err while seting login ", err);
        }
      }
      await addDoc(collection(db, "users"), {
        auth_token: id,
        email,
        name,
        photoUrl: picture,
        fav: [],
      });
      try {
        await AsyncStorage.setItem("auth_token", id);
        fetchUser();
        setloading(false);
        navigation.navigate("Mero Room");
      } catch (err) {
        console.log("err while seting reg", err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  WebBrowser.maybeCompleteAuthSession();
  const googleAuth = async () => {
    // triggers google login
    await promptAsync({});
  };
  const [request, response, promptAsync] = GoogleSingIn.useAuthRequest({
    // androidClientId:
    //   "165027373516-re7prd6p44gcqap0smkr41ogoordqioq.apps.googleusercontent.com",

    clientId:
      "165027373516-fbfhj9skjbfdvrmfbr0au60qb54rku52.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (!response) return;
    const { authentication } = response;
    const accessToken = authentication?.accessToken;
    axios
      .get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
      )
      .then((res) => {
        const id = res?.data?.sub;
        const data = res?.data;
        data.id = id;
        storeData(data);
      })
      .catch((e) => {
        console.error("Google login error", e?.response?.message);
      });
  }, [response]);

  return (
    <>
      {loading && <Loading data="Please Wait" />}
      <View style={styles.main_ontainer}>
        <View style={styles.brand_con}>
          <Image
            style={{
              height: 160,
              width: 160,
              // borderRadius: 500,
              alignSelf: "center",
            }}
            source={require("../../assets/img/logo.png")}
          />
          <Text style={styles.brand_name}>Mero Room</Text>
        </View>
        <View style={styles.footer_con}>
          <Pressable onPress={googleAuth} style={styles.btn}>
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

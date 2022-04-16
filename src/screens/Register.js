import { createUserWithEmailAndPassword } from "firebase/auth"; // actual firebase skd
import { auth, db } from "../../config/firebase"; //local
import { collection, addDoc } from "firebase/firestore";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { styles } from "../styles/auth_design";
import { useFonts } from "@expo-google-fonts/poppins";

const logo = require("./logo.svg");
const Register = () => {
  // const { fontLoaded } = useFonts({
  //   medium: Poppins_500Medium,
  //   semibold: Poppins_600SemiBold,
  // });
  const [credentails, setCredentails] = React.useState({
    phone: "",
    password: "",
    name: "",
  });
  const { email, password, name } = credentails;
  const handleChange = (name, value) => {
    setCredentails({ ...credentails, [name]: value });
  };
  const Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      // generate code
      // store code in local storage
      // paste === localstorage code === user code
      // user verified ---
      if (user) {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            name,
            email,
            password,
          });
          setCredentails({
            email: "",
            password: "",
            name: "",
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.log("error while storing in firestore", error);
        }
      }
    } catch (error) {
      console.log("error while auth", error);
    }
  };
  return (
    <ScrollView>
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
          <TextInput
            onChangeText={(text) => handleChange("name", text)}
            value={credentails.name}
            style={styles.input}
            placeholder="Display name"
          />
          <TextInput
            onChangeText={(text) => handleChange("phone", text)}
            value={credentails.email}
            style={styles.input}
            placeholder="phone number"
          />
          <TextInput
            onChangeText={(text) => handleChange("password", text)}
            value={credentails.password}
            style={styles.input}
            placeholder="Password"
          />
          <TouchableOpacity onPress={Register} style={styles.button}>
            <Text style={styles.btnText}>Join</Text>
          </TouchableOpacity>
          <View style={styles.fText}>
            <Text style={{ fontSize: 18 }}>Forgot Password?</Text>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default Register;

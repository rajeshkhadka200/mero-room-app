import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../styles/Global/card_design";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../../context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../../config/firebase";
export default function Card({ data, check }) {
  const { user } = useContext(ContexStore);
  const [inFav, setinFav] = useState(false);
  const navigation = useNavigation();
  const { address, rate, user_profile, oprn_id } = data;
  const { thumbnail } = data;

  // React.useEffect(() => {}, []);

  const favOperation = async (room_id) => {
    let token = await AsyncStorage.getItem("auth_token");
    if (!token) {
      return alert("Please Login to add in Fav");
    }
    const docRef = doc(db, "users", user[0]?.oprn_id);
    const ifAlready = user[0]?.fav.filter((data) => {
      return data === room_id;
    });

    if (!ifAlready.length > 0) {
      try {
        await updateDoc(docRef, {
          fav: arrayUnion(room_id),
        });
        setinFav(true);
      } catch (error) {
        console.log("err whil aad", error);
      }
    } else {
      try {
        await updateDoc(docRef, {
          fav: arrayRemove(room_id),
        });
        setinFav(false);
      } catch (error) {
        console.log("err whil del", error);
      }
    }
  };
  return (
    <>
      <View
        style={{
          width: check ? wp("90%") : wp("80%"),
          height: 210,
          marginRight: check ? 0 : 25,
          marginVertical: check ? 10 : 0,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Detail", {
              room_id: oprn_id,
            });
          }}
        >
          <Image
            source={{
              uri: thumbnail && thumbnail[0],
            }}
            style={styles.img}
          />
        </TouchableWithoutFeedback>
        <View style={styles.img_des}>
          <View style={styles.left}>
            <View style={styles.avatar_con}>
              <Image
                style={styles.avatar}
                source={{
                  uri: user_profile,
                }}
              />
            </View>
            <View>
              <Text style={styles.dec_address}>{address}</Text>
              <Text style={styles.dec_price}>Rs. {rate}</Text>
            </View>
          </View>

          <AntDesign
            onPress={() => {
              favOperation(oprn_id);
            }}
            name={inFav ? "heart" : "hearto"}
            size={30}
            color={inFav ? "#E35A5A" : "white"}
          />
        </View>
      </View>
    </>
  );
}

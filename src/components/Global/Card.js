import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../styles/Global/card_design";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../../context/Context";
export default function Card({ data, check }) {
  const { user } = useContext(ContexStore);
  const navigation = useNavigation();
  const { address, price, user_profile } = data;
  const { thumbnail } = data;
  const [isfav, setisfav] = useState([]);
  const favOperation = async (room_id) => {
    // check if user wants to remove or add
    const isAllready = user[0]?.fav.filter((data) => {
      return room_id === data;
    });

    if (isAllready.length === 1) {
      return console.log("remove from fav");
    }
    //delete from fav
    console.log("add to fav from fav");
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
            navigation.navigate("Detail");
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
              <Text style={styles.dec_price}>Rs. {price}</Text>
            </View>
          </View>

          <AntDesign
            onPress={() => {
              favOperation();
            }}
            name="hearto"
            size={30}
            color="white"
            // color="#E35A5A"
          />
        </View>
      </View>
    </>
  );
}

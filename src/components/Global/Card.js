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

import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../styles/Global/card_design";
import { useNavigation } from "@react-navigation/native";
export default function Card({ data, check }) {
  const navigation = useNavigation();
  const [tap, setTap] = useState(false);
  const { address, image, price, avatar } = data;
  return (
    <>
      <View
        style={{
          width:check ? wp("90%") : wp("75%"),
          height: 210,
          marginRight: 25,
          marginVertical: 10,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Detail");
          }}
        >
          <Image source={image} style={styles.img} />
        </TouchableWithoutFeedback>
        <View style={styles.img_des}>
          <View style={styles.left}>
            <View style={styles.avatar_con}>
              <Image
                style={styles.avatar}
                source={{
                  uri: avatar,
                }}
              />
            </View>
            <View>
              <Text style={styles.dec_address}>{address}</Text>
              <Text style={styles.dec_price}>Rs. {price}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setTap(!tap)}>
            <AntDesign
              name={tap ? "heart" : "hearto"}
              size={30}
              color={tap ? "#E35A5A" : "white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

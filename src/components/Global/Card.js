import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../styles/Global/card_design";
import { useNavigation } from "@react-navigation/native";
export default function Card({ data }) {
  const navigation = useNavigation();
  const [tap, setTap] = useState(false);
  const { address, image, price, avatar } = data;

  return (
    <>
      <View style={styles.actual_card_con}>
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

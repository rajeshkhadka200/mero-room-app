import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../../styles/home/card_design";

const Card = (props) => {
  return (
    <>
      <View style={styles.img_con}>
        <Image
          source={require("../../../assets/img/room.jpg")}
          style={styles.img}
        />
        <View style={styles.img_des}></View>
      </View>
    </>
  );
};

export default Card;

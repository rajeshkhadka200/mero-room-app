import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../../styles/Global/no_room_design";
const NoRooms = () => {
  return (
    <View style={styles.no_content_con}>
        <Image
          source={require("../../../assets/img/noroom.png")}
          style={styles.img}
        />
        <Text style={styles.text1}>No rooms yet!!</Text>
    </View>
  );
};

export default NoRooms;

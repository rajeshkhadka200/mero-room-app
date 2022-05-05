import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../../styles/Global/notif_design";

const SingleNotif = () => {
  return (
    <View style={styles.single_notif_con}>
      <View style={styles.left_side}>
        <Image
          style={styles.img}
          source={{
            uri: "https://www.biofamous.com/wp-content/uploads/malika-mahat-photo-1.jpg",
          }}
        />
      </View>
      <View style={styles.right_side}>
        <Text style={styles.notif_text}>
          Rajesh khadka applied for the (rajeshkhadkaofficial45@gmail.com)
        </Text>
      </View>
    </View>
  );
};

export default SingleNotif;

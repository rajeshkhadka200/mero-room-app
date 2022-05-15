import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../../styles/Global/no_content_design";

const NoContent = (search, data, render_location) => {
  return (
    <View style={styles.no_content_con}>
      <Image
        source={require("../../../assets/img/nodata.jpg")}
        style={styles.img}
      />

      <Text style={styles.text1}>Nothing to find here!</Text>
      <Text style={styles.text2}>
        {render_location
          ? render_location
          : "Sorry, We wouldn't find any room on"}
        {search || "District" + " " + data}
      </Text>
    </View>
  );
};

export default NoContent;

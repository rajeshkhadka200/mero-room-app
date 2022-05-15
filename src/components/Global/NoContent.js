import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../../styles/Global/no_content_design";

<<<<<<< HEAD
const NoContent = (search, data, render_location) => {
=======
const NoContent = (search, data,render_location) => {
>>>>>>> f9ac1cd79923ebb373976bb49529523195a062c9
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
<<<<<<< HEAD
          : "Sorry, We wouldn't find any room on"}
        {search || "District" + " " + data}
=======
          : "Sorry, We wouldn't find any room on "}
        {search || data}
>>>>>>> f9ac1cd79923ebb373976bb49529523195a062c9
      </Text>
    </View>
  );
};

export default NoContent;

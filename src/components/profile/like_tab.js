import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LikeCard } from "../../../config/api";
const delete_from_fav = (id) => {
  alert("deleting id  " + id);
};

const Like_tab = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {LikeCard.map((d) => {
          return (
            <View style={styles.liked_tab_container}>
              <Image source={d.image} style={styles.liked_room_image} />

              <Text style={styles.liketab_address}>{d.address}</Text>

              <Text style={styles.liketab_price}>{d.price}</Text>
              <TouchableOpacity
                onPress={() => delete_from_fav(d.id)}
                style={styles.removebtn}
              >
                <Text style={styles.removebtn_txt}>Remove from Fav</Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <View style={{ height: 55, backgroundColor: "white" }}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    height: "100%",
  },
  liked_tab_container: {
    width: "100%",
    marginLeft: 10,
    marginBottom: 8,
    backgroundColor: "white",
  },
  liked_room_image: {
    height: 120,
    width: "48%",
    borderRadius: 5,
  },
  liketab_address: {
    position: "absolute",
    left: 200,
    top: 20,
    fontSize: 17,
    color: "black",
    fontSize: 13.5,
    fontFamily: "400",
  },
  liketab_price: {
    position: "absolute",
    left: 200,
    top: 49,
    fontSize: 17,
    color: "black",
    fontSize: 13.5,
    fontFamily: "400",
  },
  removebtn: {
    color: "white",
    backgroundColor: "#5B628F",
    width: "42%",
    height: 30,
    borderRadius: 5,
    position: "absolute",
    top: 78,
    right: 28,
  },
  removebtn_txt: {
    fontFamily: "400",
    color: "white",
    textAlign: "center",
    paddingTop: 4,
  },
});
export default Like_tab;

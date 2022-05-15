import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/myroom/my_room_card_design";
import { AntDesign } from "@expo/vector-icons";
//firebase
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";
const RoomCard = ({ data, render_location }) => {
  const { address, rate, oprn_id } = data;
  const { thumbnail } = data;
  const deleteRoom = async (doc_id) => {
    try {
      const docRef = doc(db, "rooms", doc_id);
      await deleteDoc(docRef);
      console.log("deleted ");
    } catch (error) {
      console.log("error while", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.left_side}>
          <Image
            style={styles.img}
            source={{
              uri: thumbnail && thumbnail[0],
            }}
          />
        </View>
        <View style={styles.right_side}>
          <View style={styles.content}>
            <Text style={styles.address}>{address} </Text>
            <Text style={styles.price}>R.s {rate}</Text>
            <View style={styles.btn_grp}>
              {render_location === "my_rooms" ? (
                <>
                  <Pressable style={styles.btn}>
                    <Text style={styles.btn_text}>Edit Room</Text>
                  </Pressable>
                  <AntDesign
                    onPress={() => {
                      deleteRoom(oprn_id);
                    }}
                    style={styles.dlt}
                    name="delete"
                    size={20}
                    color="#5B628F"
                  />
                </>
              ) : (
                <Pressable style={styles.btn}>
                  <Text style={styles.btn_text}>Remove From Fav</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoomCard;

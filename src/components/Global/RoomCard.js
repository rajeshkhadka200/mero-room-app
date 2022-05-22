import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "../../styles/myroom/my_room_card_design";
import { AntDesign } from "@expo/vector-icons";
//firebase
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../../context/Context";

const RoomCard = ({ data, render_location }) => {
  const { user, favState, setfavState } = React.useContext(ContexStore);
  const navigation = useNavigation();
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

  const [isDeleting, setisDeleting] = useState(false);
  const removeFav = async (room_id) => {
    setisDeleting(true);
    const docRef = doc(db, "users", user[0]?.oprn_id);
    try {
      await updateDoc(docRef, {
        fav: arrayRemove(room_id),
      });
      const filtered = favState.filter((data) => {
        return data.oprn_id !== room_id;
      });
      setfavState(filtered);
      setisDeleting(false);
    } catch (error) {
      setisDeleting(false);
      console.log("err whil fav rem", error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.left_side}>
            <Pressable
              onPress={() => {
                navigation.navigate("Detail", {
                  room_id: oprn_id,
                });
              }}
            >
              <Image
                style={styles.img}
                source={{
                  uri: thumbnail && thumbnail[0],
                }}
              />
            </Pressable>
          </View>

          <View style={styles.right_side}>
            <View style={styles.content}>
              <Text style={styles.address}>{address} </Text>
              <Text style={styles.price}>R.s {rate}</Text>
              <View style={styles.btn_grp}>
                {render_location === "my_rooms" ? (
                  <>
                    <Pressable
                      onPress={() => {
                        Alert.alert(
                          "Sorry!",
                          "This fearure is currently unavailable. Please delete this room and repost it again"
                        );
                      }}
                      style={styles.btn}
                    >
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
                  <Pressable
                    disabled={isDeleting}
                    onPress={() => {
                      removeFav(oprn_id);
                    }}
                    style={styles.btn}
                  >
                    <Text style={styles.btn_text}>
                      {isDeleting ? (
                        <ActivityIndicator size="small" color="#fff" />
                      ) : (
                        "Remove From Fav"
                      )}
                    </Text>
                  </Pressable>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default RoomCard;

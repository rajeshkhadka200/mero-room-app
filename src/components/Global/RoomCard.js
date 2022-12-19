import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
  ToastAndroid,
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
    Alert.alert(
      "Are you sure ?",
      "After deleting this room, you won't be able to recover it !!",
      [
        {
          text: "Cancel",

          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            // delete a comment
            try {
              const docRef = doc(db, "rooms", doc_id);
              await deleteDoc(docRef);
              ToastAndroid.showWithGravityAndOffset(
                "Deleted",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                15,
                40
              );
            } catch (error) {
              console.log("error while deleting room", error);
            }
          },
        },
      ]
    );
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
      ToastAndroid.showWithGravityAndOffset(
        "Deleted",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      setisDeleting(false);
    } catch (error) {
      setisDeleting(false);
      console.log("err whil fav rem", error);
    }
  };

  const [status, setStatus] = useState(false);

  const unlistRoom = async (doc_id) => {
    Alert.alert(
      "Are you sure ?",
      "After unlisting this room, we will understand that room is already rented.",
      [
        {
          text: "Cancel",

          style: "cancel",
        },
        {
          text: "List",
          onPress: async () => {
            // delete a comment
            try {
              setStatus(true);
              const docRef = doc(db, "rooms", doc_id);
              await updateDoc(docRef, {
                isAvailable: false,
              });

              setStatus(false);
              ToastAndroid.showWithGravityAndOffset(
                "Unlisted, You can't see this room in search",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
              );
            } catch (error) {
              console.log("error while unlisting room", error);
            }
          },
        },
      ]
    );
  };
  const listRoom = async (doc_id) => {
    Alert.alert(
      "Are you sure ?",
      "After listing this room, we will understand that room is still available for rent.",
      [
        {
          text: "Cancel",

          style: "cancel",
        },
        {
          text: "Unlist",
          onPress: async () => {
            try {
              setStatus(true);
              const docRef = doc(db, "rooms", doc_id);
              await updateDoc(docRef, {
                isAvailable: true,
              });
              setStatus(false);
              ToastAndroid.showWithGravityAndOffset(
                "Listed, Now you can see this room in search",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
              );
            } catch (error) {
              console.log("error while unlisting room", error);
            }
          },
        },
      ]
    );
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
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.address}
              >
                {address}
              </Text>
              <Text style={styles.price}>R.s {rate}</Text>
              <View style={styles.btn_grp}>
                {render_location === "my_rooms" ? (
                  <>
                    {data.isAvailable === true ? (
                      <Pressable
                        onPress={() => {
                          unlistRoom(oprn_id);
                        }}
                        style={{ ...styles.btn, backgroundColor: "red" }}
                      >
                        <Text style={styles.btn_text}>
                          {(status && (
                            <ActivityIndicator size={"small"} color="#fff" />
                          )) ||
                            "Unlist Room"}
                        </Text>
                      </Pressable>
                    ) : (
                      <Pressable
                        onPress={() => {
                          listRoom(oprn_id);
                        }}
                        style={styles.btn}
                      >
                        <Text style={styles.btn_text}>
                          {(status && (
                            <ActivityIndicator size={"small"} color="#fff" />
                          )) ||
                            "List Room"}
                        </Text>
                      </Pressable>
                    )}
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

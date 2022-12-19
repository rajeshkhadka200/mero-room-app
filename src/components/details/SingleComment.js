import React, { useEffect, useState, useContext, ToastAndroid } from "react";
import { View, Text, Image, Pressable, FlatList, Alert } from "react-native";
import { db } from "../../../config/firebase";
import { styles } from "../../styles/details/single_comment";
import {
  collection,
  query,
  onSnapshot,
  where,
  deleteDoc,
  doc,
  orderBy,
} from "firebase/firestore";
import { ContexStore } from "../../context/Context";
import { Entypo } from "@expo/vector-icons";
const SingleComment = ({ room_id }) => {
  const [comment, setcomment] = useState([]);
  const { user } = useContext(ContexStore);
  useEffect(() => {
    const colRef = collection(db, "comments");
    const q = query(
      colRef,
      where("room_id", "==", room_id),
      orderBy("createdAt")
    );
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        oprn_id: doc.id,
      }));
      setcomment(data);
    });
  }, []);
  const filteredcmt = comment.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const deleteComment = (id) => {
    Alert.alert(
      "Want to delete a comment ?",
      "After delating, you won't be able to recover it !!",
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
              const docRef = doc(db, "comments", id);
              const res = await deleteDoc(docRef);
              alert("Deleted");
            } catch (error) {
              console.log("err while del cmt", error);
            }
          },
        },
      ]
    );
  };
  const renderComment = ({ item }) => {
    return (
      <Pressable style={styles.flex_cmt}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.user_profile,
          }}
        ></Image>
        <View style={styles.right_side}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.username}>
              {item.user_name} •{" "}
              <Text style={styles.cmt_txt}>{item.createdAt}</Text>
            </Text>
            {user[0]?.auth_token === item.user_id ? (
              <Entypo
                onPress={() => {
                  deleteComment(item.oprn_id);
                }}
                name="dots-three-vertical"
                size={18}
                color="black"
              />
            ) : null}
          </View>
          <Text style={styles.cmt_txt}>{item.comment}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <>
      <View style={styles.single_cmt_wrapper_outer}>
        <Text style={styles.header_text}>All comments ({comment.length})</Text>
        {/* comment */}
        <FlatList
          data={filteredcmt}
          keyExtractor={(i) => {
            i.id;
          }}
          renderItem={renderComment}
        />
      </View>
    </>
  );
};

export default SingleComment;

import { View, Text, TextInput, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../../styles/details/comment_design";
import { Ionicons } from "@expo/vector-icons";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const Comment = ({ room_id }) => {
  //post the comments
  const [comment, setComment] = useState("");
  const postComment = async () => {
    try {
      const res = await addDoc(collection(db, "comments"), {
        room_id: 5,
        user_id: 1,
        user_name: "rajesh khadka",
        comment,
        user_profile: "pic",
        createdAt: Date.now(),
      });
      alert("Thanks for feedback");
      setComment("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // get the comments
  useEffect(async () => {
    const q = query(
      collection(db, "comments"),
      where("room_id", "==", room_id)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setComment([...comment, doc.data()]);
    });
  }, []);
  return (
    <View style={styles.cmt_wrapper}>
      <Text style={styles.cmt_header_text}>Leave a feedback</Text>
      <View style={styles.inp_wrapper}>
        <TextInput
          value={comment}
          onChangeText={(text) => {
            setComment(text);
          }}
          style={styles.input}
          placeholder="comment goes here"
        ></TextInput>
        <Ionicons
          onPress={postComment}
          style={styles.send_btn}
          name="send-outline"
          size={24}
          color="#fff"
        />
      </View>
    </View>
  );
};

export default Comment;

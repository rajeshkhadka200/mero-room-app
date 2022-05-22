import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import { styles } from "../../styles/details/comment_design";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import SingleComment from "./SingleComment";
import { Feather } from "@expo/vector-icons";

import { ContexStore } from "../../context/Context";
const Comment = ({ room_id }) => {
  const { user } = useContext(ContexStore);
  //post the comments
  const [comment, setComment] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const postComment = async () => {
    if (user.length < 1) {
      return alert("Please Login to comment !!");
    } else if (!comment) return alert("Comment cannot be empty !");
    else if (comment.length < 3) {
      return alert("Comment is too short");
    }
    try {
      setisLoading(true);
      setComment("");
      await addDoc(collection(db, "comments"), {
        room_id: room_id,
        user_id: user[0]?.auth_token,
        user_name: user[0]?.name,
        comment,
        user_profile: user[0]?.photoUrl,
        createdAt: Date.now(),
      });
      setisLoading(false);
    } catch (e) {
      setisLoading(false);
      console.error("Error adding document: ", e);
    }
  };
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
        <TouchableOpacity
          onPress={postComment}
          style={styles.send_btn_con}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Feather
              style={styles.send_btn}
              name="send"
              size={28}
              color="#fff"
            />
          )}
        </TouchableOpacity>
      </View>
      <SingleComment room_id={room_id} />
    </View>
  );
};

export default Comment;

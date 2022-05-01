import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { styles } from "../../styles/details/comment_design";
import { collection, query, where, orderBy, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import SingleComment from "./SingleComment";
import { Feather } from "@expo/vector-icons";
import {} from "react/cjs/react.production.min";
import { ContexStore } from "../../context/Context";
const Comment = ({ room_id }) => {
  const { user } = useContext(ContexStore);
  console.log(user.name);
  //post the comments
  const [comment, setComment] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const postComment = async () => {
    if (!comment) {
      return alert("Comment cannot be empty !");
    } else if (comment.length < 3) {
      return alert("Commnt is to short");
    }
    try {
      setisLoading(true);
      const res = await addDoc(collection(db, "comments"), {
        room_id: room_id,
        user_id: user.id,
        user_name: user.name,
        comment,
        user_profile: user.img,
        createdAt: Date.now(),
      });
      setisLoading(false);
      alert("Thanks for feedback");
      setComment("");
    } catch (e) {
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
        <TouchableOpacity style={styles.send_btn} disabled={isLoading}>
          {/* <Feather onPress={postComment} name="send" size={24} color="#fff" /> */}
          <ActivityIndicator color={"red"} size="large" />
        </TouchableOpacity>
      </View>
      <SingleComment room_id={room_id} />
    </View>
  );
};

export default Comment;

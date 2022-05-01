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

import { ContexStore } from "../../context/Context";
const Comment = ({ room_id }) => {
  const { user } = useContext(ContexStore);
  console.log(user);
  const user_img =
    "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/271552238_521282596092505_372241037423835333_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eRDg9Hqum5gAX8i69h8&_nc_ht=scontent.fktm6-1.fna&oh=00_AT_gYHZDRrC1HvOkB0Scs51QXVg0I1pBnB4bMDeVAQH8EQ&oe=62728AD9";
  //post the comments
  const [comment, setComment] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const postComment = async () => {
    if (!user) {
      return alert("Please Login to comment !!");
    } else if (!comment) return alert("Comment cannot be empty !");
    else if (comment.length < 3) {
      return alert("Comment is too short");
    }
    try {
      setisLoading(true);
      setComment("");
      const res = await addDoc(collection(db, "comments"), {
        room_id: room_id,
        user_id: user.user_id,
        user_name: user.name,
        comment,
        user_profile: user_img,
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
            <ActivityIndicator color="#fff" size="large" />
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

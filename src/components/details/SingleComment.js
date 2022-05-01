import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";

import { styles } from "../../styles/details/single_comment";
const SingleComment = ({ room_id }) => {
  const comment = [
    {
      id: 15,
      username: "Rajesh khadka",
      user_profile:
        "https://scontent.fbwa3-1.fna.fbcdn.net/v/t39.30808-6/270849698_636049147586954_6512254458201320833_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rcWYT47xgcYAX9TO0RR&tn=UF65uT2GC-C7e0x7&_nc_ht=scontent.fbwa3-1.fna&oh=00_AT8bhvimMQdT-VQjKrSZDu5Xrb7xuELaXVLvq1AqEzTkbg&oe=626DBB6D",
      comment:
        "The room is very pretty, and I recommonded you guys to stay there.",
    },
    {
      id: 16,
      username: "Utsav Bhattarai",
      user_profile:
        "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/271552238_521282596092505_372241037423835333_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eRDg9Hqum5gAX8i69h8&_nc_ht=scontent.fktm6-1.fna&oh=00_AT_gYHZDRrC1HvOkB0Scs51QXVg0I1pBnB4bMDeVAQH8EQ&oe=62728AD9",
      comment: "Recommanded !! Nice Room and Good App  ",
    },
  ];
  const [comments, setcomments] = useState([]);
  useEffect(async () => {
    const q = query(
      collection(db, "comments"),
      where("room_id", "==", room_id)
    );
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setcomments({ ...doc.data(), doc_id: doc.id });
      });
    });
  }, []);

  const deleteComment = (id) => {
    alert(id);
  };
  const renderComment = ({ item }) => {
    return (
      <Pressable
        onLongPress={() => {
          deleteComment(item.id);
        }}
        style={styles.flex_cmt}
      >
        <Image
          style={styles.avatar}
          source={{
            uri: item.user_profile,
          }}
        ></Image>
        <View style={styles.right_side}>
          <Text style={styles.username}>{item.username}</Text>
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
        <FlatList data={comment} renderItem={renderComment} />
      </View>
    </>
  );
};

export default SingleComment;

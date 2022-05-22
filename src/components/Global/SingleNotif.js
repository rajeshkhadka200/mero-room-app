import { View, Text, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { styles } from "../../styles/Global/notif_design";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { ContexStore } from "../../context/Context";
import { useNavigation } from "@react-navigation/native";
const SingleNotif = ({ notif }) => {
  const navigation = useNavigation();
  const { user } = useContext(ContexStore);
  const {
    address,
    createdAt,
    oprn_id,
    room_id,
    user_id,
    user_profile,
    seenBy,
  } = notif;
  const makeSeen = async (user_id, room_id, oprn_id) => {
    alert(oprn_id);
    try {
      await updateDoc(doc(db, "notif", oprn_id), {
        seenBy: arrayUnion(user_id),
      });
      navigation.navigate("Detail", {
        room_id: room_id,
      });
    } catch (error) {
      console.log("err while seen", error);
    }
  };
  const [isNew, setisNew] = useState(true);
  // React.useEffect(() => {
  //   for (let i = 0; i < seenBy.length; i++) {
  //     if (seenBy[i] === user[0].auth_token) {
  //       setisNew(false);
  //     }
  //   }
  // }, []);

  return (
    <Pressable
      onPress={() => {
        makeSeen(user_id, room_id, oprn_id);
      }}
    >
      <View style={styles.notif_con}>
        <Image
          source={{
            uri: user_profile,
          }}
          style={styles.img}
        />
        <View style={styles.text_con}>
          <Text style={styles.t1}>{createdAt} &nbsp;&nbsp;</Text>
          <Text style={styles.t2}>New room is available at {address} </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SingleNotif;

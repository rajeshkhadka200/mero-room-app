import React, { useContext, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  BackHandler,
  LogBox,
} from "react-native";
import { styles } from "../../styles/details/model_design";
import { ContexStore } from "../../context/Context";
import { Entypo } from "@expo/vector-icons";
import { userWhoApplied } from "../../../config/api";
import Modal from "react-native-modal";
const Model = () => {
  //false warning configured

  const contextData = useContext(ContexStore);
  const { isModel, setisModel } = contextData;
  const clodeModel = () => {
    setisModel(!isModel);
  };
  const renderAppliedUser = ({ item }) => {
    return (
      <Pressable style={styles.person_card}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.left_side}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.createdAt}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <Modal
        animationOut="slideOutDown"
        onBackButtonPress={() => {
          clodeModel(!isModel);
        }}
        onBackdropPress={clodeModel}
        isVisible={isModel}
      >
        <View style={styles.white_box}>
          {/* Model header */}
          <View style={styles.model_header}>
            <Text style={styles.header_text}>People Who applied</Text>
            <Entypo
              onPress={clodeModel}
              style={styles.cross_icon}
              name="cross"
              size={20}
              color="rgba(0, 0, 0, 0.8)"
            />
          </View>
          <FlatList
            keyExtractor={(index) => index.id}
            data={userWhoApplied}
            renderItem={renderAppliedUser}
          ></FlatList>
        </View>
      </Modal>
    </>
  );
};

export default Model;

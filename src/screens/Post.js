import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  RefreshControl,
  Button
} from "react-native";
import { styles } from "../styles/post/post_design";
import SelectDropdown from "react-native-select-dropdown";
import { District } from "../../config/api";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import Checkbox from "react-native-modest-checkbox";
import { Ionicons } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";
import ImagePicker from 'react-native-image-crop-picker';
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// post screen
const Post = () => {
  const [img, setImg] = useState(null);
  const imageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImg(result.uri);
    } else {
      alert("Cancelled");
    }
  };

  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => setImg(null)} />
      }
    >
      <View style={styles.post_con}>
        <Text style={styles.post_text}>
          Note: Please fill the form with correct details
        </Text>
        <TextInput placeholder="Enter the Address" style={styles.post_input1} />
        <SelectDropdown
          data={District}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          defaultButtonText={"Choose a District"}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <AntDesign
                name={isOpened ? "up" : "down"}
                color={"rgba(9, 8, 8, 0.37)"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
        />
        <View style={styles.post_input2_con}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Rate"
            style={styles.post_input2}
          />
          <TextInput
            keyboardType="number-pad"
            placeholder="No of Room"
            style={styles.post_input2}
          />
        </View>
        <View style={styles.post_input3_con}>
          <View style={styles.post_input3}>
            <Text style={styles.text3}>Kitchen</Text>
            <Checkbox
              customLabel={true}
              label=""
              checked={select1}
              noFeedback={true}
              checkedComponent={
                <Ionicons name="checkmark-circle" size={28} color="#5B628F" />
              }
              uncheckedComponent={
                <Ionicons
                  name="checkmark-circle-outline"
                  size={28}
                  color="#a8a8a8"
                />
              }
              onChange={(checked) => setSelect1(!select1)}
            />
          </View>
          <View style={styles.post_input3}>
            <Text style={styles.text3}>Flat</Text>
            <Checkbox
              customLabel={true}
              label=""
              noFeedback={true}
              checked={select2}
              checkedComponent={
                <Ionicons name="checkmark-circle" size={28} color="#5B628F" />
              }
              uncheckedComponent={
                <Ionicons
                  name="checkmark-circle-outline"
                  size={28}
                  color="#a8a8a8"
                />
              }
              onChange={(checked) => setSelect2(!select2)}
            />
          </View>
        </View>
        <TextInput
          editable={false}
          placeholder="Description"
          style={styles.post_des}
        />
        {img ? (
          <>
            <TouchableOpacity onPress={imageUpload}>
              <Image
                source={{ uri: img }}
                style={{
                  height: hp("25%"),
                  flex: 1,
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
              <TouchableWithoutFeedback onPress={() => setImg(null)}>
                <Entypo
                  style={styles.cross}
                  name="circle-with-cross"
                  size={26}
                  color="#fff"
                />
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.post_img}>
            <TouchableOpacity onPress={imageUpload}>
              <MaterialCommunityIcons
                name="image-plus"
                size={35}
                color="#BFBFBA"
              />
            </TouchableOpacity>
            <Text style={styles.post_img_text}>Choose an Image</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
export default Post;

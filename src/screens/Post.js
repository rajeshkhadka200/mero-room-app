import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  RefreshControl,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "../styles/post/post_design";
import SelectDropdown from "react-native-select-dropdown";
import { District } from "../../config/api";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import Checkbox from "react-native-modest-checkbox";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ContexStore } from "../context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Nav from "../navigation/Nav";
import Loading from "../components/Global/Loading";
const Post = ({ route }) => {
  const { data, setData, images, setimages, isRoomuploading } =
    React.useContext(ContexStore);
  let detail = `A new and fresh room available at ${
    data.address ? data.address : `<address>`
  }. Kitchen is ${
    data.iskitchen ? `also` : `not`
  } available along with the room. The facility of water and sanitary is amazing. ${
    data.rooms_count ? data.rooms_count : ` <rooms count>`
  } rooms are available at the house. The property is ${
    data.isFlat ? `a whole flat` : `room only.`
  } 
  `;

  data.desc = detail;
  const imageUpload = async (key) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.photo,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.8,
    });
    if (!result.cancelled) {
      setimages({ ...images, [key]: result.uri });
    }
  };
  const cutImg = (key) => {
    setimages({ ...images, [key]: "" });
  };
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleRefresh = () => {
    setData({
      address: "",
      district: "",
      rate: "",
      rooms_count: "",
      iskitchen: select1,
      isFlat: select2,
      desc: "",
      number: "",
    });
  };

  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={handleRefresh} />
        }
      >
        {isRoomuploading && <Loading data="Uploading..." />}
        <View style={styles.post_con}>
          <Text style={styles.post_text}>
            Note: Please fill the form with correct details
          </Text>
          <TextInput
            editable={!isRoomuploading}
            value={data.address}
            placeholder="Enter the Address"
            style={styles.post_input1}
            onChangeText={(text) => {
              handleChange("address", text);
            }}
          />
          <SelectDropdown
            defaultValue={"Choose a District"}
            data={District}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            defaultButtonText={"Choose a District"}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
            onSelect={(selectedItem, index) => {
              setData({ ...data, district: selectedItem });
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
          <TextInput
            editable={!isRoomuploading}
            value={data.number}
            placeholder="Phone Number"
            style={styles.post_input1}
            keyboardType="number-pad"
            onChangeText={(text) => {
              handleChange("number", text);
            }}
          />

          <View style={styles.post_input2_con}>
            <TextInput
              editable={!isRoomuploading}
              value={data.rate}
              keyboardType="number-pad"
              placeholder="Rate"
              style={styles.post_input2}
              onChangeText={(text) => {
                handleChange("rate", text);
              }}
            />
            <TextInput
              editable={!isRoomuploading}
              value={data.rooms_count}
              keyboardType="number-pad"
              placeholder="No of Room"
              style={styles.post_input2}
              onChangeText={(text) => {
                handleChange("rooms_count", text);
              }}
            />
          </View>
          <View style={styles.post_input3_con}>
            <View style={styles.post_input3}>
              <Text style={styles.text3}>Kitchen</Text>
              <Checkbox
                // customLabel={true}
                checked={data.iskitchen}
                label=""
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
                onChange={(checked) =>
                  setData({ ...data, iskitchen: !data.iskitchen })
                }
              />
            </View>
            <View style={styles.post_input3}>
              <Text style={styles.text3}>Flat</Text>
              <Checkbox
                // customLabel={true}
                label=""
                noFeedback={true}
                checked={data.isFlat}
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
                onChange={(checked) =>
                  setData({ ...data, isFlat: !data.isFlat })
                }
              />
            </View>
          </View>
          <TextInput
            multiline={true}
            editable={false}
            allowFontScaling={false}
            style={{
              fontFamily: "400",
              ...styles.post_des,
            }}
            value={detail}
            placeholder={"Details is generated by Our AI"}
          />
          <View style={styles.img_con}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {images.one === "" ? (
                <View style={styles.post_img}>
                  <TouchableOpacity
                    onPress={() => {
                      imageUpload("one");
                    }}
                  >
                    <MaterialCommunityIcons
                      name="image-plus"
                      size={35}
                      color="#BFBFBA"
                    />
                  </TouchableOpacity>
                  <Text style={styles.post_img_text}>Choose an image</Text>
                </View>
              ) : (
                <View style={styles.img_con_after}>
                  <Image
                    style={styles.con_after_img}
                    source={{
                      uri: images.one,
                    }}
                  />
                  <Text
                    onPress={() => {
                      cutImg("one");
                    }}
                    style={styles.cross}
                  >
                    <Entypo name="circle-with-cross" size={20} color="#fff" />
                    {/* <Entypo name="cross" size={20} color="#fff" /> */}
                  </Text>
                </View>
              )}
              {images.two === "" ? (
                <View style={styles.post_img}>
                  <TouchableOpacity
                    onPress={() => {
                      imageUpload("two");
                    }}
                  >
                    <MaterialCommunityIcons
                      name="image-plus"
                      size={35}
                      color="#BFBFBA"
                    />
                  </TouchableOpacity>
                  <Text style={styles.post_img_text}>Choose an Image</Text>
                </View>
              ) : (
                <View style={styles.img_con_after}>
                  <Image
                    style={styles.con_after_img}
                    source={{
                      uri: images.two,
                    }}
                  />
                  <Text
                    onPress={() => {
                      cutImg("two");
                    }}
                    style={styles.cross}
                  >
                    <Entypo name="circle-with-cross" size={20} color="#fff" />
                    {/* <Entypo name="cross" size={20} color="#fff" /> */}
                  </Text>
                </View>
              )}
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {images.three === "" ? (
                <View style={styles.post_img}>
                  <TouchableOpacity
                    onPress={() => {
                      imageUpload("three");
                    }}
                  >
                    <MaterialCommunityIcons
                      name="image-plus"
                      size={35}
                      color="#BFBFBA"
                    />
                  </TouchableOpacity>
                  <Text style={styles.post_img_text}>Choose an Image</Text>
                </View>
              ) : (
                <View style={styles.img_con_after}>
                  <Image
                    style={styles.con_after_img}
                    source={{
                      uri: images.three,
                    }}
                  />
                  <Text
                    onPress={() => {
                      cutImg("three");
                    }}
                    style={styles.cross}
                  >
                    <Entypo name="circle-with-cross" size={20} color="#fff" />
                    {/* <Entypo name="cross" size={20} color="#fff" /> */}
                  </Text>
                </View>
              )}
              {images.four === "" ? (
                <View style={styles.post_img}>
                  <TouchableOpacity
                    onPress={() => {
                      imageUpload("four");
                    }}
                  >
                    <MaterialCommunityIcons
                      name="image-plus"
                      size={35}
                      color="#BFBFBA"
                    />
                  </TouchableOpacity>
                  <Text style={styles.post_img_text}>Choose an Image</Text>
                </View>
              ) : (
                <View style={styles.img_con_after}>
                  <Image
                    style={styles.con_after_img}
                    source={{
                      uri: images.four,
                    }}
                  />
                  <Text
                    onPress={() => {
                      cutImg("four");
                    }}
                    style={styles.cross}
                  >
                    <Entypo name="circle-with-cross" size={20} color="#fff" />
                    {/* <Entypo name="cross" size={20} color="#fff" /> */}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <Nav active={route.name} />
    </>
  );
};
export default Post;

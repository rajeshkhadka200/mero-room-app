import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { styles } from "../styles/post/post_design";
import SelectDropdown from "react-native-select-dropdown";
import { District } from "../../config/api";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
// post screen
const Post = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
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
          </View>
          <View style={styles.post_input3}>
            <Text style={styles.text3}>Flat</Text>
          </View>
        </View>
        <TextInput placeholder="Description" style={styles.post_des} />
        <View style={styles.post_img}>
          <MaterialCommunityIcons name="image-plus" size={35} color="#BFBFBA" />
          <Text style={styles.post_img_text}>Choose an Image</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Post;

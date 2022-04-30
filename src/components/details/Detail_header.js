import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../../styles/details/Detail_Header_design.js"; //header css
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Modal from "../../components/details/Model";
import { ContexStore } from "../../context/Context.js";
import Comment from "./Comment.js";

const WhiteIcon = ({ text }) => {
  return (
    <>
      <View style={styles.icon_single}>
        <View style={styles.actual_icon}>
          <MaterialCommunityIcons
            name="bed"
            size={24}
            color="rgba(0, 0, 0, 0.58)"
          />
        </View>
        <Text style={styles.icon_text}>{text}</Text>
      </View>
    </>
  );
};

const Detail_header = ({ route }) => {
  // const {room_id} = route.params
  const room_id = 5;
  const contextData = useContext(ContexStore);
  const { isModel, setisModel } = contextData;

  const navigation = useNavigation();
  const handleModel = () => {
    setisModel(!isModel);
  };

  return (
    <>
      <View>
        <Text style={styles.arrow}>
          <AntDesign onPress={() =>navigation.navigate("Tabs")} name="arrowleft" size={24} color="white" />
        </Text>
        <Image
          style={{ width: "100%", height: 250 }}
          source={{
            uri: "https://thumbs.dreamstime.com/b/hotel-room-13225019.jpg",
          }}
        ></Image>
        <View style={styles.lower_wrapper}>
          <View style={styles.small_info_flex}>
            <View>
              <Text style={styles.price}>Rs. 1850</Text>
              <Text style={styles.address}>Butwal 13, Devinagar Rupandehi</Text>
            </View>
            <View style={styles.small_right}>
              <Image
                style={{ width: 35, height: 35, borderRadius: 500 }}
                source={{
                  uri: "https://cutt.ly/pGglXVL",
                }}
              ></Image>
            </View>
          </View>

          {/* icons info  */}
          <View style={styles.icon_wrapper}>
            <WhiteIcon text="5 rooms" />
            <WhiteIcon text="No" />
            <WhiteIcon text="lacking" />
            <WhiteIcon text="available" />
          </View>
          {/* description */}
          <View style={styles.header_con}>
            <View style={styles.desc_header}>
              <Text style={styles.header_text}>Description</Text>
              <Text style={styles.header_status}>available</Text>
            </View>

            <Text style={styles.desc_para}>
              A new and fresh room available at Butwal 13, kalikanagar. Room is
              available at 4th floor of the house. Kitchen is also available
              along with the room. The facility of water and sanitary is
              amazing.
            </Text>
            {/* render map here */}
            <View style={styles.btn_wrapper}>
              <TouchableOpacity style={styles.btn_apply}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontFamily: "500",
                  }}
                >
                  Apply
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleModel} style={styles.btn_left}>
                <FontAwesome5 name="user-friends" size={24} color="#5B628F" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Comment room_id={room_id} />
      </View>
      {isModel ? <Modal /> : null}
    </>
  );
};

export default Detail_header;

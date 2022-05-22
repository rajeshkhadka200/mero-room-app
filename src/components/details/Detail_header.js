import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import call from "react-native-phone-call";
import { styles } from "../../styles/details/Detail_Header_design.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import Modal from "../../components/details/Model";
import { ContexStore } from "../../context/Context.js";
import Comment from "./Comment.js";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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

const Detail_header = ({ room_id }) => {
  const { test } = useContext(ContexStore);
  const [roomDetail, setroomDetail] = useState([]);
  React.useEffect(() => {
    const singleRoom = test.filter((data) => {
      return data.oprn_id === room_id;
    });
    setroomDetail(singleRoom);
  }, []);
  const navigation = useNavigation();
  const makeCall = () => {
    const args = {
      number: roomDetail[0]?.number.toString(),
      prompt: false,
    };
    // Make a call
    call(args).catch(console.error);
  };
  const imgs = roomDetail[0]?.thumbnail;

  const renderImgs = (data) => {
    return (
      <Image
        style={{ width: wp("100%"), height: 250 }}
        source={{
          uri: data.item,
        }}
      ></Image>
    );
  };
  const [index, setindex] = useState();
  const onViewableItemsChanged = useRef((item) => {
    // setindex(item.viewableItems[0].index);
  });

  return (
    <>
      <View>
        <Text style={styles.arrow}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={24}
            color="white"
          />
        </Text>
        {/* <View style={styles.indi_wrapper}>
          {imgs.map((itm, i) => {
            return (
              <View
                style={{
                  backgroundColor: i == index ? "#1394e8" : "#eeeeee",
                  ...styles.indicator,
                }}
              ></View>
            );
          })}
        </View> */}
        <FlatList
          nestedScrollEnabled={true}
          // viewabilityConfig={viewabilityConfig.current}
          onViewableItemsChanged={onViewableItemsChanged.current}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          data={imgs}
          renderItem={renderImgs}
          keyExtractor={(i) => {
            i.index;
          }}
        />

        <View style={styles.lower_wrapper}>
          <View style={styles.small_info_flex}>
            <View>
              <Text style={styles.price}>Rs. {roomDetail[0]?.rate}</Text>
              <Text style={styles.address}>{roomDetail[0]?.address}</Text>
            </View>
            <View style={styles.small_right}>
              <Image
                style={{ width: 35, height: 35, borderRadius: 500 }}
                source={{
                  uri: roomDetail[0]?.user_profile,
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
              <Text style={styles.header_status}>{roomDetail[0]?.status}</Text>
            </View>

            <Text style={styles.desc_para}>{roomDetail[0]?.desc}</Text>
            {/* render map here */}
            <View style={styles.btn_wrapper}>
              <Pressable
                onPress={() => {
                  Alert.alert(
                    "Sorry!",
                    "This fearure is currently unavailable."
                  );
                }}
                style={styles.btn_apply}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontFamily: "500",
                  }}
                >
                  Chat with Owner
                </Text>
              </Pressable>
              <TouchableOpacity onPress={makeCall} style={styles.btn_left}>
                <Entypo name="phone" size={24} color="#5B628F" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Comment room_id={room_id} />
      </View>
    </>
  );
};

export default Detail_header;

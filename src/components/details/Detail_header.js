import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import call from "react-native-phone-call";
import { styles } from "../../styles/details/Detail_Header_design.js"; //header css
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Modal from "../../components/details/Model";
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

const Detail_header = ({ route }) => {
  // const {room_id} = route.params
  const room_id = 5;
  const navigation = useNavigation();
  const makeCall = () => {
    const args = {
      number: "9854858548",
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  const imgs = [
    "https://thumbs.dreamstime.com/b/hotel-room-13225019.jpg",
    "https://static.toiimg.com/thumb/msid-75589870,width-1200,height-900,resizemode-4/.jpg",
    "https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg",
    "https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1207490255-e1615485559611.jpg",
  ];
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
    console.log(item);
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
              <Pressable style={styles.btn_apply}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontFamily: "500",
                  }}
                >
                  Contact for room
                </Text>
                <AntDesign
                  style={{
                    marginLeft: 5,
                  }}
                  name="arrowright"
                  size={24}
                  color="#fff"
                />
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

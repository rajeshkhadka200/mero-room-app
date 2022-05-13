import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { styles } from "../styles/Profile/profile_design.js";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import RoomCard from "../components/Global/RoomCard.js";
import { ContexStore } from "../context/Context.js";

const Profile = () => {
  const { user, rooms } = React.useContext(ContexStore);
  console.log("user in profile", user);
  const my_fav = [
    {
      photo: require("../../assets/img/room1.jpg"),
      address: "Butwal Kalikanagar",
      price: "5000",
      room_id: 5,
    },
    {
      photo: require("../../assets/img/room2.jpg"),
      address: "Butwal Sukhanagar",
      price: "4000",
      room_id: 5,
    },
  ];

  const renderRooms = ({ item }) => {
    return (
      <>
        <RoomCard data={item} render_location="profile" />
      </>
    );
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
      >
        <View style={styles.header}>
          <View style={styles.cover_bg}></View>
          <View>
            <Image
              style={styles.pp}
              source={{
                uri: "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-1/271552238_521282596092505_372241037423835333_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-6&_nc_sid=7206a8&_nc_ohc=3tPlezk2SpoAX-Ca6jI&_nc_ht=scontent.fktm10-1.fna&oh=00_AT_eB09DZrnnlPIZe5RWIhU-VI18FKD2m8d5GekBC07ulw&oe=627D5F7B",
              }}
            />
            <Pressable style={styles.camera_con}>
              <Entypo name="camera" size={20} color="black" />
            </Pressable>
          </View>
          <Text style={styles.profile_name}>Utsav Bhattarai</Text>
        </View>
        <View style={styles.bottom_con}>
          <View style={styles.stat_con}>
            <View style={styles.box}>
              <Text style={styles.num}>4</Text>
              <Text style={styles.label}>Favourite</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.num}>10</Text>
              <Text style={styles.label}>My uploads</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.num}>45</Text>
              <Text style={styles.label}>Total Rooms</Text>
            </View>
          </View>
          <View style={styles.btn_con}>
            <Pressable style={styles.btn1}>
              <FontAwesome5
                name="pen"
                size={16}
                color="#fff"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text1}>Edit Profile</Text>
            </Pressable>
            <Pressable style={styles.btn2}>
              <Text style={styles.text2}>LogOut</Text>
              <MaterialIcons
                name="logout"
                size={18}
                color="#000"
                style={{ marginLeft: 5 }}
              />
            </Pressable>
          </View>
          <View style={styles.lower_wrapper_fav}>
            <View style={styles.lower_header}>
              <Text style={styles.fav_logo}>My Favourite</Text>
              <MaterialIcons
                style={styles.love_icon}
                name="favorite"
                size={24}
                color="#F66565"
              />
              <View style={styles.line}></View>
            </View>
            {/* actual data */}
            <FlatList
              data={my_fav}
              renderItem={renderRooms}
              keyExtractor={(i) => {
                i.index;
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Profile;

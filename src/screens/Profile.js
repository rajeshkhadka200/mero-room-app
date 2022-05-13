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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Nav from "../navigation/Nav.js";

const Profile = ({ route }) => {
  const navigation = useNavigation();
  const { user, setUser } = React.useContext(ContexStore);
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
  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("auth_token");
      setUser([]);
      navigation.navigate("Mero Room");
    } catch (error) {
      console.log("err in logout", error);
    }
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
                uri: user[0]?.photoUrl,
              }}
            />
            <Pressable style={styles.camera_con}>
              <Entypo name="camera" size={20} color="black" />
            </Pressable>
          </View>
          <Text style={styles.profile_name}>{user[0]?.name}</Text>
        </View>
        <View style={styles.bottom_con}>
          <View style={styles.stat_con}>
            <View style={styles.box}>
              <Text style={styles.num}>{user[0]?.fav.length}</Text>
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
            <Pressable onPress={Logout} style={styles.btn2}>
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
      <Nav active={route.name} />
    </>
  );
};
export default Profile;

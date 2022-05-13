import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Post from "../screens/Post";
import Myroom from "../screens/Myroom";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Pressable,
  Image,
} from "react-native";
import { db, st } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // storage
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"; // firestore
import { ContexStore } from "../context/Context";
import Explore from "../screens/Explore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
//notification indicator
const notif = true;
const Tabs = ({ navigation }) => {
  const Logout = async () => {
    try {
      await AsyncStorage.removeItem("auth_token");
      setUser([]);
      navigation.navigate("Tabs");
    } catch (error) {
      console.log("err in logout", error);
    }
  };

  const {
    user,
    data,
    images,
    setData,
    setimages,
    isRoomuploading,
    setisRoomuploading,
  } = useContext(ContexStore);
  //post hooks

  // post function
  const upload = async (data, img) => {
    let images_to_push = [];
    let downloadLink = [];
    const { address, district, rate, rooms_count, iskitchen, isFlat, desc } =
      data;
    for (var key in img) {
      if (img[key] === "") {
        return alert("Please select an images !");
      }
    }
    for (var key in data) {
      if (data[key] === "" || data[key] === "Choose a District") {
        return alert("all feilds are required !!");
      }
    }
    for (var key in img) {
      images_to_push.push(img[key]);
    }

    setisRoomuploading(true);
    const docRef = await addDoc(collection(db, "rooms"), {
      room_id: Date.now(),
      user_id: 10,
      user_profile: "",
      address,
      district,
      rate,
      rooms_count,
      iskitchen,
      isFlat,
      desc,
      thumbnail: [],
    });
    if (!docRef.id) {
      setisRoomuploading(false);
      return alert("Error while uploading");
    }
    const metadata = {
      contentType: "image/jpeg",
    };
    images_to_push.map(async (img) => {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", img, true);
        xhr.send(null);
      });
      const imageRef = ref(st, `images/${Date.now()}-meroroom`);
      await uploadBytes(imageRef, blob, metadata)
        .then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          downloadLink.push(downloadURL);
          await updateDoc(doc(db, "rooms", docRef.id), {
            thumbnail: downloadLink,
          });
          if (downloadLink.length === 4) {
            setisRoomuploading(false);
            setData({
              address: "",
              district: "",
              rate: "",
              rooms_count: "",
              iskitchen: false,
              isFlat: false,
              desc: "",
            });
            setimages({
              one: "",
              two: "",
              three: "",
              four: "",
            });
          }
          blob.close();
        })
        .catch((e) => {
          setisRoomuploading(false);
          console.log("err while upload", e);
        });
    });
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          flex: 1,
          bottom: 0,
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "white",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerRight: () => (
            <>
              <View style={header.wrapper}>
                <TouchableOpacity style={header.headerIcon}>
                  <Ionicons
                    onPress={() => {
                      Logout();
                    }}
                    name="notifications-outline"
                    size={27}
                    color="#929191"
                  />
                  {notif ? <View style={header.dot}></View> : null}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Auth");
                  }}
                  style={header.headerImg}
                >
                  {user.length > 0 ? (
                    <Image
                      style={header.avatar}
                      source={{
                        uri: user[0]?.photoUrl,
                      }}
                    />
                  ) : (
                    <Image
                      style={header.avatar}
                      source={{
                        uri: "https://scontent.fbwa3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=JnDLo_5PpjYAX8cG4vv&_nc_oc=AQmdU2hM-Q3jsox61SGyJovD3ROHCMzHtMpTPXZNREEXG3AwBGDk475naer2wpodQ1o&tn=jOFtfr9vq0GDmmko&_nc_ht=scontent.fbwa3-1.fna&oh=00_AT-XDUZmFAck3kLBwdCWYvigPPD4PkhYN01zNexQ-Ca4uA&oe=62970D78",
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </>
          ),
          headerStyle: {
            backgroundColor: "#fff",
            height: 65,
            elevation: 0,
          },
          headerTitleStyle: {
            fontFamily: "500",
            color: "rgba(0, 0, 0, 1)",
            fontSize: 28,
            marginLeft: 6,
            fontFamily: "888",
          },
        }}
        name="Mero Room"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            elevation: 0,
            borderBottomColor: "#efefef",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "500",
            marginLeft: -5,
            marginTop: 4,
          },
          headerLeft: () => (
            <>
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign
                  style={{ marginLeft: 15 }}
                  name="arrowleft"
                  size={28}
                  color="black"
                />
              </Pressable>
            </>
          ),
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="explore" size={35} color="#5B628F" />
            ) : (
              <AntDesign name="find" size={30} color="#929191" />
            ),
        }}
        name="Explore"
        component={Explore}
      />

      <Tab.Screen
        options={{
          headerStyle: {
            elevation: 0,
            borderBottomColor: "#Dfdfdf",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "500",
            marginLeft: -5,
            marginTop: 4,
            fontSize: 18,
          },
          headerLeft: () => (
            <>
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign
                  style={{ marginLeft: 15 }}
                  name="arrowleft"
                  size={28}
                  color="black"
                />
              </Pressable>
            </>
          ),

          headerRight: () => (
            <Pressable
              disabled={isRoomuploading}
              onPress={() => upload(data, images)}
            >
              <Text style={header.btn_post}>
                {isRoomuploading ? (
                  <>
                    <ActivityIndicator size="small" color="#fff" />
                  </>
                ) : (
                  "Post"
                )}
              </Text>
            </Pressable>
          ),
          headerStyle: {
            elevation: 0,
            borderColor: "dfdfdf",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "500",
            color: "#000",
            fontSize: 18,
            alignSelf: "center",
          },
          tabBarLabel: "Post",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "pluscircle" : "pluscircleo"}
              size={33}
              color={focused ? "#5B628F" : "#929191"}
            />
          ),
        }}
        name="New Room"
        component={Post}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            elevation: 0,
            borderBottomColor: "#Dfdfdf",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "500",
            marginLeft: -5,
            marginTop: 4,
            fontSize: 18,
          },
          headerLeft: () => (
            <>
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign
                  style={{ marginLeft: 15 }}
                  name="arrowleft"
                  size={28}
                  color="black"
                />
              </Pressable>
            </>
          ),

          headerTitleAlign: "left",
          tabBarLabel: "My Room",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="bed" size={30} color="#5B628F" />
            ) : (
              <MaterialCommunityIcons
                name="bed-outline"
                size={30}
                color="#929191"
              />
            ),
        }}
        name="My Room"
        component={Myroom}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            elevation: 0,
            borderBottomColor: "#Dfdfdf",
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: "500",
            marginLeft: -5,
            marginTop: 4,
            fontSize: 18,
          },
          headerLeft: () => (
            <>
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign
                  style={{ marginLeft: 15 }}
                  name="arrowleft"
                  size={28}
                  color="black"
                />
              </Pressable>
            </>
          ),
          headerRight: () => (
            <>
              <MaterialIcons
                style={{ marginRight: 15 }}
                name="logout"
                size={28}
                color="black"
              />
            </>
          ),

          headerTitleAlign: "Left",
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={focused ? 27 : 24}
              color={focused ? "#5B628F" : "#929191"}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
const header = StyleSheet.create({
  headerIcon: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  dot: {
    padding: 3.2,
    backgroundColor: "#FF7700",
    borderRadius: 500,
    position: "absolute",
    right: 6,
    top: 6.5,
  },
  btn_post: {
    marginRight: 15,
    backgroundColor: "#5B628F",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 5,
    fontFamily: "500",
    color: "#fff",
  },
  wrapper: {
    flexDirection: "row",
  },
  headerImg: {
    borderColor: "#2374E1",
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 39,
    height: 39,
  },
  avatar: {
    width: 34,
    height: 33,
    borderRadius: 25.5,
  },
});

export default Tabs;

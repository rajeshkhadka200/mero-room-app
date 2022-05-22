import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LogBox,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
// icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
//importing screen
import Detail from "../screens/Detail";
LogBox.ignoreLogs(["Setting a timer"]);
import moment from "moment";
// imports fonts
import {
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  OleoScriptSwashCaps_400Regular,
  OleoScriptSwashCaps_700Bold,
} from "@expo-google-fonts/oleo-script-swash-caps";
// import app loading
import AppLoading from "expo-app-loading";
import Search from "../screens/Search";
import Auth from "../screens/Auth";
import Post from "../screens/Post";
import Notif from "../screens/Notif";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Myroom from "../screens/Myroom";
import Profile from "../screens/Profile";
import { ContexStore } from "../context/Context";
import { useNavigation } from "@react-navigation/native";

//Database
import { db, st } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // storage
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"; // firestore

export default function Route() {
  const skeleton =
    "https://scontent.fbwa3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=JnDLo_5PpjYAX8cG4vv&_nc_oc=AQmdU2hM-Q3jsox61SGyJovD3ROHCMzHtMpTPXZNREEXG3AwBGDk475naer2wpodQ1o&tn=jOFtfr9vq0GDmmko&_nc_ht=scontent.fbwa3-1.fna&oh=00_AT-XDUZmFAck3kLBwdCWYvigPPD4PkhYN01zNexQ-Ca4uA&oe=62970D78";
  const navigation = useNavigation();
  const {
    user,
    data,
    images,
    setData,
    setimages,
    isRoomuploading,
    setisRoomuploading,
    setloading,
  } = React.useContext(ContexStore);

  const notif = true;
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  // use the fonts
  let [fontsLoaded] = useFonts({
    200: Poppins_200ExtraLight,
    300: Poppins_300Light,
    400: Poppins_400Regular,
    500: Poppins_500Medium,
    600: Poppins_600SemiBold,
    700: Poppins_700Bold,
    999: OleoScriptSwashCaps_700Bold,
    888: OleoScriptSwashCaps_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();
  //room upload function
  const pushNotif = async (room_id, address) => {
    await addDoc(collection(db, "notif"), {
      room_id,
      user_id: user[0]?.auth_token,
      user_name: user[0]?.name,
      user_profile: user[0]?.photoUrl,
      address: address,
      createdAt: moment().format("llll"),
      timestamp: Date.now(),
    });
  };
  const upload = async (data, img) => {
    let images_to_push = [];
    let downloadLink = [];
    const {
      address,
      district,
      rate,
      rooms_count,
      iskitchen,
      isFlat,
      desc,
      number,
    } = data;
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

    // await addDoc(collection(db, "users"), {
    const docRef = await addDoc(collection(db, "rooms"), {
      token: user[0]?.auth_token,
      user_profile: user[0]?.photoUrl,
      address,
      district,
      rate,
      rooms_count,
      iskitchen,
      isFlat,
      desc,
      number,
      status: "available",
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
            // room uploaded
            setisRoomuploading(false);

            setData({
              address: "",
              district: "",
              rate: "",
              rooms_count: "",
              iskitchen: false,
              isFlat: false,
              desc: "",
              number: "",
            });
            setimages({
              one: "",
              two: "",
              three: "",
              four: "",
            });
            // push notif
          }
          blob.close();
        })
        .catch((e) => {
          setisRoomuploading(false);
          console.log("err while upload", e);
        });
    });
    pushNotif(docRef.id, data.address);
  };
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            animation: "fade",
            headerShown: true,
            headerRight: () => (
              <>
                <View style={header.wrapper}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Notification")}
                    style={header.headerIcon}
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={27}
                      color="#929191"
                    />
                    {notif ? <View style={header.dot}></View> : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if (user?.length === 1) {
                        navigation.navigate("Profile");
                      } else {
                        navigation.navigate("Auth");
                      }
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
                          uri: skeleton,
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
            },
            headerShadowVisible: false,
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
        <Stack.Screen
          options={{
            animation: "fade",
            headerShadowVisible: false,
            headerShown: true,
            headerStyle: {
              elevation: 0,
              borderBottomColor: "#efefef",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: "500",
            },
          }}
          name="Explore"
          component={Explore}
        />
        <Stack.Screen
          options={{
            animation: "slide_from_bottom",
            headerShown: true,
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
            headerRight: () => (
              <Pressable
                disabled={isRoomuploading}
                onPress={() => upload(data, images)}
              >
                <Text style={header.btn_post}>
                  {isRoomuploading
                    ? // <>
                      //   <ActivityIndicator size="small" color="#fff" />
                      // </>
                      "Posting"
                    : "Post"}
                </Text>
              </Pressable>
            ),
          }}
          name="Post"
          component={Post}
        />
        <Stack.Screen
          options={{
            animation: "fade",
            headerShadowVisible: true,
            headerShown: true,
            headerStyle: {
              borderBottomColor: "#Dfdfdf",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: "500",
              marginLeft: -5,
              marginTop: 4,
              fontSize: 18,
            },
          }}
          name="MyRoom"
          component={Myroom}
        />
        <Stack.Screen
          options={{
            animation: "fade",
            headerShown: true,
            headerStyle: {
              elevation: 0,
              borderBottomColor: "#Dfdfdf",
              borderBottomWidth: 1,
            },
            headerRight: () => (
              <>
                <MaterialIcons name="logout" size={28} color="black" />
              </>
            ),
            headerTitleStyle: {
              fontFamily: "500",
              marginLeft: -5,
              marginTop: 4,
              fontSize: 18,
            },
          }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{ headerShown: false, animation: "slide_from_bottom" }}
          name="Auth"
          component={Auth}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Notification"
          component={Notif}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            animation: "slide_from_right",
            headerStyle: {
              elevation: 0,
              borderColor: "dfdfdf",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: "500",
              color: "rgba(0, 0, 0, 1)",
              fontSize: 15,
            },
            headerShadowVisible: true,
          }}
        />
      </Stack.Navigator>

      <StatusBar backgroundColor={"#333"} />
    </>
  );
}

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
    // marginRight: 15,
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

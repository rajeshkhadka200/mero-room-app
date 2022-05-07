import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { React } from "react";
import { LikeCard } from "../../../config/api";

const Profileportion = () => {
  const name = " Rajesh Khadka";
  const address = "Kalikanagar-12,Butwal";
  const liked_num = LikeCard.length;
  const home_num = 13;
  const navigation = useNavigation();
  const logged_out = () => {
    ToastAndroid.show("you're logged off", ToastAndroid.SHORT);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.profile_container}>
        <Image
          source={{
            uri: "https://scontent.fbwa3-1.fna.fbcdn.net/v/t39.30808-6/270849698_636049147586954_6512254458201320833_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=qDaPYl2UFpgAX-__qmr&_nc_ht=scontent.fbwa3-1.fna&oh=00_AT9X-891VlJ6TzMF9PsRMow9stkmi9eULJ9x5KnNn1Pf4w&oe=627B932D",
          }}
          style={styles.profile_image}
        />
      </View>
      <View style={styles.profile_display_card}></View>
      <Text style={styles.name_text}>{name}</Text>
      <Text style={styles.address_text}>{address}</Text>
      <View style={styles.liked_icon}>
        <Image
          source={require("../../../assets/img/like.png")}
          style={styles.like_image}
        />
        <Text style={styles.like_num}>{liked_num}</Text>
      </View>
      <View style={styles.home_icon}>
        <Image
          source={require("../../../assets/img/home.png")}
          style={styles.home_icon_pic}
        />
        <Text style={styles.home_icon_text}>{home_num}</Text>
      </View>
      <TouchableOpacity
        onPress={() => logged_out()}
        style={styles.logout_frame}
      >
        <View>
          <Image
            source={require("../../../assets/img/logout.png")}
            style={styles.logout_image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "white",
    flex: 0.588,
  },

  profile_container: {
    backgroundColor: "white",
    height: 150,
    width: 150,
    borderRadius: 100,
    position: "absolute",
    top: 15,
    left: 45,
    shadowColor: "white",
    shadowOffset: { width: -4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 0.1,
  },
  profile_image: {
    height: 145,
    width: 145,
    borderRadius: 100,
    position: "absolute",
    top: 2.5,
    left: 2.5,
  },
  profile_display_card: {
    backgroundColor: "#5B628F",
    height: 150,
    width: "90%",
    borderRadius: 9,
    marginLeft: "5%",
    position: "absolute",
    top: 80,
  },
  name_text: {
    color: "white",
    fontSize: 20,
    position: "absolute",
    top: 100,
    right: 30,
    fontFamily: "400",
  },
  address_text: {
    color: "white",
    fontSize: 15,
    fontFamily: "400",
    position: "absolute",
    top: 135,
    right: 30,
  },
  liked_icon: {
    position: "absolute",
    top: 195,
    left: 40,
  },
  like_image: {
    height: 20.9,
    width: 25,
  },
  like_num: {
    position: "absolute",
    top: -3,
    left: 32,
    fontSize: 18,
    color: "white",
    fontFamily: "400",
  },
  home_icon: {
    position: "absolute",
    top: 195,
    left: 130,
  },
  home_icon_pic: {
    height: 20.9,
    width: 25,
  },
  home_icon_text: {
    position: "absolute",
    top: -2,
    left: 32,
    fontSize: 18,
    color: "white",
    fontFamily: "400",
  },
  logout_frame: {
    position: "absolute",
    top: 198,
    right: 40,
  },
  logout_image: {
    height: 20,
    width: 25,
    transform: [{ scaleY: 1.2 }, { scaleX: 1.2 }],
  },
});

export default Profileportion;

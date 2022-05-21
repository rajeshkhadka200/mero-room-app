import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Notif = () => {
  return (
    <View style={styles.con}>
      <View style={styles.notif_con}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/vectors/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-vector-id1221348467?k=20&m=1221348467&s=612x612&w=0&h=hp8h8MuGL7Ay-mxkmIKUsk3RY4O69MuiWjznS_7cCBw=",
          }}
          style={styles.img}
        />
        <View style={styles.text_con}>
          <Text style={styles.t1}>5 May,2022</Text>
          <Text style={styles.t2}>
            Hello User, It's me 'Ego' AI of Mero-Room welcome you to explore your awesome app🔥.

          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  notif_con: {
    borderRadius: 7,
    borderLeftColor: "#5B628F",
    borderLeftWidth: 5,
    backgroundColor: "#efefef",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent:"space-evenly",
    flexDirection:"row",
    alignItems:"center"
  },
  text_con:{
    flex:1,
    padding:2,

  },
  img:{
      alignSelf:"flex-start",
      width:35,
      height:35,
      borderRadius:17,
      marginRight:15
  },
  t1:{
      fontFamily:"500",
      fontSize:13,
      color:"grey"
  },
  t2:{
      fontFamily:"400",
      fontSize:16,
  }
});

export default Notif;

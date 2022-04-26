import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  //header body css
  body_wrapper: {
    marginLeft: 20,
  },
  new_section: {
    marginTop: 20,
  },
  new_text: {
    fontSize: 23,
    fontWeight: "normal",
  },
  card_wrapper: {
    marginTop: 10,
  },

  //image card css
  img_con: {
    maxWidth: "90%",
    height: 220,
  },
  img: {
    maxWidth: 350,
    maxHeight: 220,
    borderRadius: 10,
    resizeMode: "cover",
  },
  img_des: {
    fontSize: 20,
    color: "black",
  },
  divider: {
    width: 20,
  },
  img_des:{
    width:350,
    backgroundColor:"rgba(43, 41, 41, 0.85);",
    opacity:200,
    height:70,
    position:"absolute",
    bottom:0,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:15
  },
  dec_address:{
    color:"white",
    fontSize:16,
    fontWeight:"500"
  },
  dec_price:{
    fontSize:15,
    fontWeight:"500",
    color:"#FFA500"
  },
  avatar:{
    width:45,
    height:45,
    borderRadius:100,
  },
  left:{
    flexDirection:"row",
    alignItems:"center"
  },
  avatar_con:{
    borderColor:"#2374E1",
    borderWidth:1.5,
    marginRight:10,
    borderRadius:100,



  
  }
});

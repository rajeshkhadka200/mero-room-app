import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  post_con: {
    marginTop: 15,
    marginHorizontal: 15,
    display: "flex",
    marginBottom:75,
    flex: 1,
  },
  post_text: {
    fontFamily: "300",
    fontSize: 15,
  },
  post_input1: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    marginVertical: 15,
    fontSize: 15,
    color: "#000",
  },
  dropdown1BtnStyle: {
    width: "100%",
    height: 53,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
  },
  dropdown1BtnTxtStyle: {
    color: "rgba(9, 8, 8, 0.37)",
    textAlign: "left",
    fontFamily: "400",
    fontSize: 15,
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#efefef",
    borderRadius: 12,
    width: wp("50%"),
  },
  dropdown2RowStyle: {
    backgroundColor: "#efefef",
    borderBottomColor: "#C5C5C5",
  },
  dropdown2RowTxtStyle: {
    color: "rgba(9, 8, 8, 0.37)",
    textAlign: "center",
    fontFamily: "400",
    fontSize: 15,
  },
  post_input2_con: {
    flexDirection: "row",
    marginVertical: 15,
    flex: 1,
    justifyContent: "space-between",
  },
  post_input2: {
    flex: 1 / 2.2,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
  },
  post_input3_con: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  post_input3: {
    backgroundColor: "#EFEFEF",
    flex: 1 / 2.2,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },
  text3: {
    fontFamily: "300",
    color: "rgba(9, 8, 8, 0.57)",
  },
  post_des: {
    marginVertical: 15,
    flex: 1,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: hp("15%"),
    color: "rgba(9, 8, 8, 0.57)",
  },
  post_img: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    padding:hp("7.5%"),
    paddingBottom: hp("7.5%"),
    borderStyle: 'dashed',
    borderColor:"#BFBFBA",
    borderWidth:3,
    alignItems:"center"
  },
  post_img_text:{
      fontFamily:"400",
      color:"#afafaf",
      fontSize:15,
  }
});

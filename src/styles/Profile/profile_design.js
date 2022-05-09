import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
export const styles = StyleSheet.create({
    header:{
        flex:1,
        alignItems:"center"
    },
    cover_bg:{
        backgroundColor:"#EFF2F7",
        width:wp("100%"),
        height:hp("30%")
    },
    pp:{
        marginTop:-100,
        width:wp("40%"),
        height:hp("20%"),
        borderWidth:3,
        borderColor:"#2374E1",
        borderRadius:500,
    },
    camera_con:{
        backgroundColor:"#E2E5EE",
        width:35,
        height:35,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        right:7,
        bottom:5
    },
    profile_name:{
        fontFamily:"600",
        fontSize:23,
        marginTop:15
    },
    bottom_con:{
        flex:1,
        paddingHorizontal:15,
        paddingTop:30,
        paddingBottom:20,
        marginBottom:60

    },
    stat_con:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    box:{
        width:wp("27%"),
        height:hp("11%"),
        borderColor:"rgba(0, 0, 0, 0.25)",
        borderRadius:8,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20
     },
     num:{
         fontFamily:"600",
         fontSize:22
     },
     label:{
         fontFamily:"500",
         fontSize:13,
     }
})
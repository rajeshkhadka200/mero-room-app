import { View, Text } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const Empty = ({check}) => {
  return (
    <View
    style={{
     width:wp("90%"),
     height: 200,
     justifyContent:"center",
     alignItems:"center",
     backgroundColor: "#dfdfdf",
     flex:1,
     borderRadius:10,

    }}>
     <Text style={{
       fontFamily:"500",
       fontSize:20,
     }}>No data yet</Text>
   </View>
  )
}

export default Empty
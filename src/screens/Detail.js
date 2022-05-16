import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  LogBox,
} from "react-native";
import React, { useContext, useEffect } from "react";
import Detail_header from "../components/details/Detail_header";

// main detail page
const Detail = ({ route }) => {
  const { room_id } = route.params;
  console.log("room_id", room_id);
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        {/* this includes picture, others and others info */}
        <Detail_header room_id={room_id} />
        {/* Comment */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

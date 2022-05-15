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
const Detail = () => {

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        {/* this includes picture, others and others info */}
        <Detail_header />
        {/* Comment */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

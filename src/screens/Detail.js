import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  LogBox,
} from "react-native";
import React, { useContext } from "react";
import Detail_header from "../components/details/Detail_header";

// main detail page
const Detail = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* this includes picture, others and others info */}
        <Detail_header />
        {/* Comment */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

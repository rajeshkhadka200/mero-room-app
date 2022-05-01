import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  LogBox,
} from "react-native";
import React, { useContext } from "react";
import Detail_header from "../components/details/Detail_header";
import { ContexStore } from "../context/Context";

// main detail page
const Detail = () => {
  const contextData = useContext(ContexStore);
  const { isModel } = contextData;

  return (
    <SafeAreaView>
      <ScrollView scrollEnabled={!isModel}>
        {/* this includes picture, others and others info */}
        <Detail_header />
        {/* Comment */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

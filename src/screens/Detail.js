import { ScrollView, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import Detail_header from "../components/details/Detail_header";
import { ContexStore } from "../context/Context";
import Comment from "../components/details/Comment";

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
        {/* <Comment  /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

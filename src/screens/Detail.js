import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";
import Detail_header from "../components/details/Detail_header";

// main detail page
const Detail = (navigation) => {
  return (
    <ScrollView>
      <Detail_header navigation={navigation} />
    </ScrollView>
  );
};

const mainDesign = StyleSheet.create({});
export default Detail;

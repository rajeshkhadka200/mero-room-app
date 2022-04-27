import { ScrollView, SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";
import Detail_header from "../components/details/Detail_header";

// main detail page
const Detail = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Detail_header />
      </ScrollView>
    </SafeAreaView>
  );
};

const mainDesign = StyleSheet.create({});
export default Detail;

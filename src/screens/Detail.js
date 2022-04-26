import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";
import Detail_header from "../components/details/Detail_header";
import { SafeAreaView } from "react-native-safe-area-context";

// main detail page
const Detail = (navigation) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Detail_header navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const mainDesign = StyleSheet.create({});
export default Detail;

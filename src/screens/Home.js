import { ScrollView, SafeAreaView, RefreshControl } from "react-native";
import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";
import Nav from "../navigation/Nav";
const Home = ({ navigation, route }) => {
  console.log(route);
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={false} />}
        >
          {/* from notif to filter = Home Header */}
          <HomeHeader />
          {/* frombelow filter */}
          <HomeBody />
        </ScrollView>
        <Nav active={route.name} />
      </SafeAreaView>
    </>
  );
};
export default Home;

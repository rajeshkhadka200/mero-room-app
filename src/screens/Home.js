import {
  ScrollView,
  SafeAreaView,
  RefreshControl,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeBody from "../components/home/HomeBody";
import Nav from "../navigation/Nav";
const Home = ({ route }) => {
  console.log(route);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <SafeAreaView
          style={{
            backgroundColor: "#fff",
            flex: 1
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
      </KeyboardAvoidingView>
    </>
  );
};
export default Home;

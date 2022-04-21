import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";
import React from "react";
import { ContexStore } from "../context/Context";

const Home = ({ navigation }) => {
  const context = React.useContext(ContexStore);
  const { user } = context.userData;
  const clear = async () => {
    try {
      await AsyncStorage.removeItem("auth_details");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Button title="clear" onPress={clear} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;

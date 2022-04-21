import { AsyncStorage } from "react-native";

export class middleware {
  static async checkLogin(history) {
    try {
      const token = await AsyncStorage.getItem("auth_details");
      if (token) {
        history.navigate("Tabs");
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async getAuthToken() {
    try {
      let token = await AsyncStorage.getItem("auth_details");
      return token;
    } catch (error) {
      console.log(error);
    }
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
export const CheckLogin = async (header, detail) => {
  console.log(header);
  try {
    const navigation = useNavigation();
    Alert.alert(header, detail, [
      {
        text: "No",
        onPress: () => {
          navigation.goBack();
        },
      },
      {
        text: "Continue",
        onPress: () => {
          navigation.navigate("Auth");
        },
      },
    ]);
  } catch (error) {}
};

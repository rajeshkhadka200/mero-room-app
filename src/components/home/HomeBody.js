import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/home/home_body_design";
import {React,useContext} from "react";
import { cardData } from "../../../config/api";
import Card from "../Global/Card";
import { ContexStore } from "../../context/Context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EmptyComp from "../Global/Empty"

const HomeBody = () => {
  const { test } = useContext(ContexStore);
  const renderCard = ({ item }) => {
    //for the new rooms
    return <Card data={item} />;
  };

  return (
    <>
      <View style={styles.body_wrapper}>
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <Text style={styles.new_text}>New Room</Text>
          <FlatList
            legacyImplementation={false}
            data={test}
            ListEmptyComponent={<EmptyComp/>}
            renderItem={renderCard}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(index) => index.id}
            style={styles.card_wrapper}
          />
        </View>
        <View>
          <Text style={styles.new_text}>Popular Rooms</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            marginVertical: 20 + 60,
          }}
        >
          <Text style={styles.new_text}>Other Rooms</Text>
          <FlatList
            legacyImplementation={false}
            data={test}
            renderItem={renderCard}
            ListEmptyComponent={<EmptyComp/>}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(index) => index.id}
            style={styles.card_wrapper}
          />
        </View>
      </View>
    </>
  );
};

export default HomeBody;

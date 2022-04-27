import { View, Text, Image, TouchableWithoutFeedback,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../styles/Global/card_design";
import { useNavigation } from "@react-navigation/native";

export default function Card({ data}) {
  const navigation = useNavigation();
  const [tap, setTap] = useState(false);
  const { address, image, price } = data;

  return (
    <>
      <View style={styles.actual_card_con}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail')}>
          <Image source={image} style={styles.img} />
        </TouchableWithoutFeedback>
        <View style={styles.img_des}>
          <View style={styles.left}>
            <View style={styles.avatar_con}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/271552238_521282596092505_372241037423835333_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ot9HVfkZVGwAX9xLUma&_nc_ht=scontent.fktm6-1.fna&oh=00_AT_v0dTwwh4HtTfeI2B5GJzDoS7q220ZeoG-npsD63D3gQ&oe=626C9C19",
                }}
              />
            </View>
            <View>
              <Text style={styles.dec_address}>{address}</Text>
              <Text style={styles.dec_price}>Rs. {price}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setTap(!tap)}>
            <AntDesign
              name={tap ? "heart" : "hearto"}
              size={30}
              color={tap ? "#FF6FB5" : "white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

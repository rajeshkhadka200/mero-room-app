import { View, Text, FlatList, Image, ScrollView,TouchableOpacity } from "react-native";
import { styles } from "../../styles/home/home_body_design";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { cardData } from "../../../config/api";
const HomeBody = () => {
  const [tap,setTap] = React.useState(false)
  const renderCard = ({ item }) => {
    return (
      <>
        <View style={styles.img_con}>
          <Image source={item.image} style={styles.img} />
        </View>
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
              <Text style={styles.dec_address}>{item.address}</Text>
              <Text style={styles.dec_price}>Rs. {item.price}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setTap(true)
          }>

            <AntDesign name={ tap ? "heart" :"hearto"} size={30} color={tap ? "#FF6FB5" : "white"} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const seperator = () => {
    return <View style={styles.divider}></View>;
  };
  return (
    <>
      <ScrollView>
        <View style={styles.body_wrapper}>
          <View style={styles.new_section}>
            <Text style={styles.new_text}>New Room</Text>
            <FlatList
              data={cardData}
              renderItem={renderCard}
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={(index) => index.id}
              style={styles.card_wrapper}
              ItemSeparatorComponent={seperator}
            />
          </View>
          <View style={styles.new_section}>
            <Text style={styles.new_text}>Popular Rooms</Text>
            <FlatList
              data={cardData}
              renderItem={renderCard}
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={(index) => index.id}
              style={styles.card_wrapper}
              ItemSeparatorComponent={seperator}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeBody;

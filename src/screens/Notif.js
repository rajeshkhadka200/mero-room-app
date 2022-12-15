import { ScrollView, SafeAreaView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";
import { styles } from "../styles/Global/notif_design";
import SingleNotif from "../components/Global/SingleNotif";

const Notif = () => {
  const [notif, setnotif] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "notif");
    onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        oprn_id: doc.id,
      }));
      setnotif(data);
    });
  }, []);
  const filteredNotif = notif.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={styles.con}>
        {filteredNotif.map((data, i) => {
          return <SingleNotif key={i} notif={data} />;
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Notif;

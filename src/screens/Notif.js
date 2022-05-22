import { ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { collection, onSnapshot } from "firebase/firestore";
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

  return (
    <ScrollView style={styles.con}>
      {notif.map((data,i) => {
        return <SingleNotif key={i} notif={data} />;
      })}
    </ScrollView>
  );
};

export default Notif;

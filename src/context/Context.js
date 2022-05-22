import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useEffect, createContext } from "react";
import { db } from "../../config/firebase";
export const ContexStore = createContext();
const Context = ({ children }) => {
  const [myRoomLength, setmyRoomLength] = useState(0);
  const [user, setUser] = useState([]); // setup the logedin user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("auth_token");
        const q = query(
          collection(db, "users"),
          where("auth_token", "==", token)
        );
        onSnapshot(q, (snapshot) => {
          snapshot.docs.forEach((doc) => {
            setUser([{ ...doc.data(), oprn_id: doc.id }]);
          });
        });
      } catch (error) {
        console.log("err while geting data", error);
      }
    };
    fetchUser();
  }, []);

  // state for the model
  const [isModel, setisModel] = useState(false);

  //state for loading
  const [loading, setloading] = useState(false);

  // state for the post
  const [data, setData] = useState({
    address: "",
    district: "",
    rate: "",
    rooms_count: "",
    iskitchen: false,
    isFlat: false,
    desc: "",
    number:""
  });
  const [images, setimages] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  // state for the post success track
  const [isRoomuploading, setisRoomuploading] = useState(false);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      onSnapshot(collection(db, "rooms"), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          oprn_id: doc.id,
        }));
        setTest(data);
      });
    };

    getRooms();
  }, []);

  return (
    <ContexStore.Provider
      value={{
        user,
        setUser,
        isModel,
        setisModel,
        data,
        setData,
        images,
        setimages,
        isRoomuploading,
        setisRoomuploading,
        test,
        loading,
        setloading
      }}
    >
      {children}
    </ContexStore.Provider>
  );
};
export default Context;

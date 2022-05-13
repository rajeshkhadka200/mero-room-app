import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useEffect, createContext } from "react";
import { db } from "../../config/firebase";
export const ContexStore = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState([]); // setup the logedin user
  console.log("user in context", user);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("inside");
        const token = await AsyncStorage.getItem("auth_token");
        const q = query(collection(db, "users"), where("user_id", "==", token));
        onSnapshot(q, (snapshot) => {
          snapshot.docs.forEach((doc) => {
            setUser([{ ...doc.data(), _id: doc.id }]);
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

  // state for the post
  const [img, setImg] = useState([]);
  const [data, setData] = useState({
    address: "",
    district: "",
    rate: "",
    rooms_count: "",
    iskitchen: false,
    isFlat: false,
    desc: "",
  });
  const [images, setimages] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  // state for the post success track
  const [isRoomuploading, setisRoomuploading] = useState(false);
  const [rooms, setrooms] = useState([]);
  // get rooms
  useEffect(() => {
    const getRooms = async () => {
      onSnapshot(collection(db, "rooms"), (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setrooms([{ ...doc.data(), _id: doc.id }]);
        });
      });
    };
    getRooms();
  }, []);
  const [render, setrender] = useState("");
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
        rooms,
        setisRoomuploading,
        setrender,
      }}
    >
      {children}
    </ContexStore.Provider>
  );
};
export default Context;

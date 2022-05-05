import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useEffect, createContext } from "react";
import { db } from "../../config/firebase";
export const ContexStore = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState([]); // setup the logedin user
  const [token, setToken] = useState("");
  useEffect(async () => {
    console.log("rajesh");
  }, []);

  useEffect(async () => {
    try {
      if (token) {
        const q = query(collection(db, "users"), where("user_id", "==", token));
        onSnapshot(q, (snapshot) => {
          snapshot.docs.forEach((doc) => {
            setUser({ ...doc.data(), _id: doc.id });
          });
        });
      } else {
        setUser([]);
      }
    } catch (error) {
      console.log("err while geting data", error);
    }
  }, []);
  // state for the model
  const [isModel, setisModel] = useState(false);
  return (
    <ContexStore.Provider
      value={{
        user,
        setUser,
        isModel,
        setisModel,
        // token,
      }}
    >
      {children}
    </ContexStore.Provider>
  );
};
export default Context;

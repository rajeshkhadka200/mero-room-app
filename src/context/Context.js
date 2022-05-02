import axios from "axios";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useEffect, createContext } from "react";
import { middleware } from "../../config/Check";
import { db } from "../../config/firebase";
export const ContexStore = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState([]); // setup the logedin user
  const [token, setToken] = useState(""); // set token
  middleware.getAuthToken().then((key) => {
    setToken(key);
  });
  useEffect(() => {
    try {
      const q = query(collection(db, "users"), where("user_id", "==", token));
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUser({ ...doc.data(), id: doc.id });
        });
      });
    } catch (error) {
      console.log("err while geting data", error);
    }
  }, []);

  // state for the details header page
  const [isModel, setisModel] = useState(false);
  return (
    <ContexStore.Provider
      value={{
        user,
        setUser,
        isModel,
        setisModel,
      }}
    >
      {children}
    </ContexStore.Provider>
  );
};
export default Context;

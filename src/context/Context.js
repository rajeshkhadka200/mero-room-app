import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { middleware } from "../../config/Check";
import { db } from "../../config/firebase";
export const ContexStore = React.createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState({}); // setup the logedin user
  const [token, setToken] = useState(""); // set token
  middleware.getAuthToken().then((key) => {
    setToken(key);
  });
  useEffect(() => {
    getData();
    return () => {
      setUser({});
    };
  }, []);

  const getData = async () => {
    try {
      const q = query(collection(db, "users"), where("user_id", "==", token));
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUser({ ...doc.data(), id: doc.id });
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContexStore.Provider
      value={{
        userData: { user, setUser },
      }}
    >
      {children}
    </ContexStore.Provider>
  );
};
export default Context;

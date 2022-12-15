import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { API_KEY, AUTH_DOMAIN } from "@env";
const firebaseConfig = {
  apiKey: "AIzaSyBN-76_43D4NRSGwz24nUOBciBVTN3zIO4",
  authDomain: "mero-room-f06e5.firebaseapp.com",
  projectId: "mero-room-f06e5",
  storageBucket: "mero-room-f06e5.appspot.com",
  messagingSenderId: "165027373516",
  appId: "1:165027373516:web:f9753ffd996aec09fe3d69",
  measurementId: "G-JSM2DCQXE5",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const st = getStorage(app);

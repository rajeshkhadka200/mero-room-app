import { initializeApp } from "firebase/app";
import { API_KEY, AUTH_DOMAIN } from "@env";
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: "mero-room-f06e5",
  storageBucket: "mero-room-f06e5.appspot.com",
  messagingSenderId: "165027373516",
  appId: "1:165027373516:web:f9753ffd996aec09fe3d69",
  measurementId: "G-JSM2DCQXE5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

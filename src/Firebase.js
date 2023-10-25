import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf_TGX3YN-5T9IlRM_WgMYL6GXtaexABs",
  authDomain: "react-2023-53fa0.firebaseapp.com",
  projectId: "react-2023-53fa0",
  storageBucket: "react-2023-53fa0.appspot.com",
  messagingSenderId: "248775169613",
  appId: "1:248775169613:web:8eedc640d1d339ee4f2e04"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db};
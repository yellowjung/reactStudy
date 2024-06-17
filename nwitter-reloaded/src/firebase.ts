// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKH8UdWFASS55Q1UQJXlXf09O554XLcmU",
  authDomain: "nwitter-reloaded-35904.firebaseapp.com",
  projectId: "nwitter-reloaded-35904",
  storageBucket: "nwitter-reloaded-35904.appspot.com",
  messagingSenderId: "937954374845",
  appId: "1:937954374845:web:89481fb314190fcc0573d4",
  measurementId: "G-37N9MKVJNC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

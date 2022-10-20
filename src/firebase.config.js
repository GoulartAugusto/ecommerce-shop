import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDUPvzq_MkT-GhjNACqpIL62wWBQYOZ0GU",
  authDomain: "smartmart-13.firebaseapp.com",
  projectId: "smartmart-13",
  storageBucket: "smartmart-13.appspot.com",
  messagingSenderId: "343734842257",
  appId: "1:343734842257:web:e6b111b1e47aa8ee5a2030",
  measurementId: "G-HD3SKQWTEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBD1twaXATlEsJKn2cAbDpPHpgsrZooGbI",
  authDomain: "watchshop-e8fd2.firebaseapp.com",
  projectId: "watchshop-e8fd2",
  storageBucket: "watchshop-e8fd2.appspot.com",
  messagingSenderId: "877986943324",
  appId: "1:877986943324:web:a8fe8910bfdb73c938b199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
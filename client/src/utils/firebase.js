
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-b7612.firebaseapp.com",
  projectId: "interviewiq-b7612",
  storageBucket: "interviewiq-b7612.firebasestorage.app",
  messagingSenderId: "293274752791",
  appId: "1:293274752791:web:3f1410a3df8c6aa97a4952",
  measurementId: "G-BGCZ0NHP13"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
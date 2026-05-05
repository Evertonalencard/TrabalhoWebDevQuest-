import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ⚠️ Substitua pelas suas credenciais do Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAjiOeDHOMoxzBvaE3T5_k9CgMv0kFGPaQ",
  authDomain: "devquestproj-ed871.firebaseapp.com",
  projectId: "devquestproj-ed871",
  storageBucket: "devquestproj-ed871.firebasestorage.app",
  messagingSenderId: "420777276064",
  appId: "1:420777276064:web:8bd549746b0a2994398fc5",
  measurementId: "G-56MJ2MYRB1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0RHszzPbuRd0LFpuW41SY4647RiA0Tqs",
  authDomain: "insta-app-742a6.firebaseapp.com",
  projectId: "insta-app-742a6",
  storageBucket: "insta-app-742a6.appspot.com",
  messagingSenderId: "674112420906",
  appId: "1:674112420906:web:bfe1b8ce7a9684313a1753",
  measurementId: "G-E7737ZBCJ2"
};

// Initialize Firebasen
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
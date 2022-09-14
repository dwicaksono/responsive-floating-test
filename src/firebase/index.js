import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_DISTRIBUCION_API_KEY,
  authDomain: "remoteconfig-bfa6a.firebaseapp.com",
  projectId: "remoteconfig-bfa6a",
  storageBucket: "remoteconfig-bfa6a.appspot.com",
  messagingSenderId: "1084615603025",
  appId: "1:1084615603025:web:14bd85c1358c27d72c1970",
  measurementId: "G-000YQBWPCL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

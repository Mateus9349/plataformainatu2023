import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBOms18qgXA-faZIX8h-48PZpY_oYUrFe8",
  authDomain: "inatu-6b21d.firebaseapp.com",
  projectId: "inatu-6b21d",
  storageBucket: "inatu-6b21d.appspot.com",
  messagingSenderId: "725432284119",
  appId: "1:725432284119:web:277005e6302db1f3541192",
  measurementId: "G-E41K5CKW7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
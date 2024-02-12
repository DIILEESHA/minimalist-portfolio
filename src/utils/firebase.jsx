// firebase.jsx

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXWBA9nqqAOM-x5G7OwluAFwVqq_NgtJI",
  authDomain: "webport-a24d9.firebaseapp.com",
  projectId: "webport-a24d9",
  storageBucket: "webport-a24d9.appspot.com",
  messagingSenderId: "1093386791784",
  appId: "1:1093386791784:web:b31d0ca39917f5feb984dd",
  measurementId: "G-GMZWRQY282",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };

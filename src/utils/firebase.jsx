// firebase.jsx

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBerMlEyaytrV8yqsbHDyd2_rfOMHFfUaw",
  authDomain: "guest-bookme.firebaseapp.com",
  projectId: "guest-bookme",
  storageBucket: "guest-bookme.appspot.com",
  messagingSenderId: "330838109657",
  appId: "1:330838109657:web:5cf7846a0c1445d2f4fdc8",
  measurementId: "G-WZESSN1E8W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };

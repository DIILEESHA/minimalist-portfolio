import { useState, useEffect } from "react";
import { auth, googleProvider, db } from "../../utils/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { createRoot } from "react-dom/client";
import Layout from "../../components/Layout";
import "./guest.css";

export default function Guestbook() {
  const [user, setUser] = useState(null);
  const [guestMessage, setGuestMessage] = useState("");
  const [guestbookMessages, setGuestbookMessages] = useState([]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleSendGuestMessage = async () => {
    if (user && guestMessage.trim() !== "") {
      try {
        const docRef = await addDoc(collection(db, "guestbook"), {
          userId: user.uid,
          username: user.displayName,
          message: guestMessage,
        });
        console.log("Message written with ID: ", docRef.id);
        setGuestMessage("");

        // Fetch the latest messages after successfully adding a new message
        const querySnapshot = await getDocs(collection(db, "guestbook"));
        const messages = [];
        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        setGuestbookMessages(messages);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchGuestbookMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "guestbook"));
        const messages = [];
        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        setGuestbookMessages(messages);
      } catch (error) {
        console.error("Error fetching guestbook messages:", error);
      }
    };

    fetchGuestbookMessages();
  }, []);

  return (
    <div className="guest_container">
      <Layout />

      <div className="google_container">
        {!user ? (
          <button style={{ position: "relative" }} onClick={signInWithGoogle}>
            <img src="https://i.imgur.com/nIccV2n.gif" alt="" />
            Sign in with Google
          </button>
        ) : (
          <>
            <button style={{ position: "relative" }} onClick={handleLogout}>
              Log out
            </button>
            <div className="google_user_details">
              <h1 className="google_username">{user.displayName}</h1>
            </div>
            <input
              style={{ position: "relative" }}
              type="text"
              placeholder="Type your message..."
              value={guestMessage}
              onChange={(e) => setGuestMessage(e.target.value)}
            />
            <button
              style={{ position: "relative" }}
              onClick={handleSendGuestMessage}
            >
              Send
            </button>
          </>
        )}
      </div>

      <div className="guestbook_messages">
        {guestbookMessages.map((message, index) => (
          <div key={index}>
            <p>{`${message.username}: ${message.message}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

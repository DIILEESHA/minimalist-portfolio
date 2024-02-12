/* eslint-disable no-unused-vars */
// Guestbook.js

import React, { useState, useEffect } from "react";
import { auth, googleProvider, db } from "../../utils/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { GrSend } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import { ThreeDots } from "react-loader-spinner";
import "./guest.css";
import Template from "../../components/Template";
import Single from "../single/Single";

export default function Guestbook() {
  useEffect(() => {
    document.title = " Guest-book | Dileesha Nawarathna ";
  }, []);

  const [user, setUser] = useState(null);
  const [guestMessage, setGuestMessage] = useState("");
  const [guestbookMessages, setGuestbookMessages] = useState([]);
  const [showSignOutOption, setShowSignOutOption] = useState(false);
  const [loading, setLoading] = useState(true);

  const scrollToGuestMessages = () => {
    const guestMessagesElement = document.getElementById("guestMessages");
    if (guestMessagesElement) {
      guestMessagesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      } finally {
        setLoading(false);
      }
    };

    fetchGuestbookMessages();
  }, []);

  return (
    <Template
      scrollToGuestMessages={scrollToGuestMessages}
      guestBookDetails={{
        title: "Sign my ",
        subtitle: "guestbook🤝",
        description:
          "Drop a line in my guestbook—your thoughts matter! Join the conversation at 'Speak Your Mind' and let's create a space for shared experiences. Can't wait to hear from you!",
        arrowSrc: "https://i.imgur.com/EzZ16Wn.png",
        message: "Join the Conversation!",
      }}
    >
      <div className="guest_sub">
        <div className="template_img jkobr">
          <img src="https://i.imgur.com/wB5fIAB.png" alt="" />
        </div>
        <div className="sign_google_option">
          {!user ? (
            <div
              style={{ position: "relative" }}
              className="sign_google_btn"
              onClick={signInWithGoogle}
            >
              <div className="go">
                <img src="https://i.imgur.com/BHmqefl.png" alt="" />
              </div>
              <h2>Sign in with Google</h2>
            </div>
          ) : (
            <>
              <div className="inputer_section">
                <input
                  className="input1"
                  type="text"
                  placeholder="Your message..."
                  value={guestMessage}
                  required
                  onChange={(e) => setGuestMessage(e.target.value)}
                />
              </div>
              <div className="btn_sec">
                <button className="sign" onClick={handleSendGuestMessage}>
                  <GrSend />
                </button>
                <div
                  className="dots_vertical"
                  onClick={() => setShowSignOutOption(!showSignOutOption)}
                >
                  <HiDotsVertical
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                </div>
                {showSignOutOption && (
                  <div className="sign_out_option" onClick={handleLogout}>
                    <h3 className="so">Sign out</h3>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#fff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="guestbook_messages">
            {guestbookMessages.length === 0 ? (
              <p className="messager">
                No messages yet. Be the first to leave a message😁
              </p>
            ) : (
              guestbookMessages.map((message, index) => (
                <div className="fgl" key={index}>
                  <h2 className="kim">{`${message.username}:`}</h2>
                  <p className="messager">{` ${message.message}`}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </Template>
  );
}

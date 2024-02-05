import { useState, useEffect, useRef } from "react";
import { auth, googleProvider, db } from "../../utils/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { createRoot } from "react-dom/client";
import Layout from "../../components/Layout";
import "./guest.css";
import { GrSend } from "react-icons/gr";

export default function Guestbook() {
  const [user, setUser] = useState(null);
  const [guestMessage, setGuestMessage] = useState("");
  const [guestbookMessages, setGuestbookMessages] = useState([]);

  const guestGridRef = useRef(null);

  const scrollToGuestGrid = () => {
    if (guestGridRef.current) {
      guestGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div className="mina">
        <Layout />

        <div className="welcome_card">
          <div className="welcome_text">
            <div className="welcome_img">
              <img
                loading="lazy"
                src="https://i.imgur.com/qJzqbOj.png"
                alt=""
              />
            </div>
            <h2 className="welcome">Dileesha Lakshan Welcome’s You!</h2>
          </div>
        </div>

        {/* <div className="ok">
          <img src="https://i.imgur.com/lGIeGtN.png" alt="" />
        </div>
        <div className="ok2">
          <img src="https://i.imgur.com/xam90UC.png" alt="" />
        </div> */}
        <div className="guest_book_details">
          <h1 className="guest_book_detail_title">
            Sign my
            <span className="mooha">guestbook</span>
          </h1>

          <p className="guest_para">
            Drop a line in my guestbook—your thoughts matter! Join the
            conversation at "Speak Your Mind" and let's create a space for
            shared experiences. Can't wait to hear from you!
          </p>
        </div>

        <div className="down_arrow" onClick={scrollToGuestMessages}>
          <img src="https://i.imgur.com/EzZ16Wn.png" alt="" />
        </div>
      </div>

      <div className="guest_grid_container" id="guestMessages">
        <div className="guest_sub">
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
                </div>
                <div className="sign_out_option" onClick={handleLogout}>
                  <h3 className="so">sign out</h3>
                </div>
              </>
            )}
          </div>
          <div className="guestbook_messages">
            {guestbookMessages.length === 0 ? (
              <p>No messages yet. Be the first to leave a message!</p>
            ) : (
              guestbookMessages.map((message, index) => (
                <div className="fgl" key={index}>
                  <h2 className="kim">{`${message.username}:`}</h2>
                  <p className="messager">{` ${message.message}`}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="guest_sub">3</div>
      </div>
    </div>
  );
}

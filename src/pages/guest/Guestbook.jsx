/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { auth, googleProvider, db } from "../../utils/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
// import { createRoot } from "react-dom/client";
import Layout from "../../components/Layout";
import { FaArrowRight } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import {  ThreeDots } from "react-loader-spinner";
import "./guest.css";
import { GrSend } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Guestbook() {
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
      // eslint-disable-next-line no-unused-vars
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
        // setLoading(false);
      } catch (e) {
        console.error("Error adding document: ", e);
        // setLoading(false);
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

        <div className="ok">
          <img src="https://i.imgur.com/lGIeGtN.png" alt="" />
        </div>
        <div className="ok2">
          <img src="https://i.imgur.com/xam90UC.png" alt="" />
        </div>
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
          <img loading="lazy" src="https://i.imgur.com/EzZ16Wn.png" alt="" />
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

        <div className="guest_sub">
          <div className="card_gap">
            <div className="newsletter_card">
              <div className="newsletter_img_section">
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/719734/pexels-photo-719734.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>

              <h2 className="sub">Subscribe to my newsletter!</h2>
              <p className="sub_para">
                Follow my journey, I write about tech, my experiences and more.
              </p>

              <div className="email_section">
                <input
                  required
                  placeholder="your email....."
                  type="email"
                  className="email_input"
                />
                <button className="email_btn">subscribe</button>
              </div>
            </div>

            <div className="thanks_card">
              <div className="thanks_flex">
                <div
                  style={{
                    fontSize: "30px",
                    margin: "-7px 0 0px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  👋
                </div>
                <h2 className="thank">Thanks for visiting my site!</h2>
              </div>
              <h2 className="glad">Glad to have you here.</h2>

              <Link to="/guest-book" className="linka">
                <div className="leave_option">
                  <div className="text_leave">
                    <p className="mkov">Leave a message on my guestbook</p>
                  </div>
                  <div className="arrowme">
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
              <div className="leave_options">
                <div className="text_leave">
                  <a
                    className="linka"
                    href="mailto:dileeshawork@gmail.com
                  "
                  >
                    <p className="i">Send an email</p>
                  </a>
                </div>
                <div className="arrowme">
                  <FaArrowRight className="mp" />
                </div>
              </div>
            </div>

            <div className="recommendations">
              <h2 className="sub">Recommendations / Kind words</h2>
              <p className="mkov">
                <Link className="linka" to="/#recommend">
                  See recommendations here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

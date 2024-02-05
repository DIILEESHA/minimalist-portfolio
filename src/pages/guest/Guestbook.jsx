import Layout from "../../components/Layout";
import Nav from "../../components/nav/Nav";
import Card from "../../components/navcard/Card";
import { auth, googleProvider } from "../../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import "./guest.css";
import { useEffect } from "react";

export default function Guestbook() {

  const [user] = useAuthState(auth);
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  const handleLogout = () => {
    auth.signOut();
  };
  useEffect(() => {
    console.log(user);
  }, [user])
  return (
    <div className="guest_container">
      <Layout />

      <div className="guest_book_details">
        <h2 className="guest_book_detail_title">
          Sign my
          <span className="mooha">guestbook</span>
        </h2>

        <p className="guest_para">
          Thank you for visiting my portfolio! Feel free to leave your thoughts,
          comments, or feedback in my guestbook. Your input is valuable to me.
        </p>
      </div>

      <div className="guest_grid_container">
        <div className="guset_sub">
          <div className="google_container">
            <button>
              <img src="https://i.imgur.com/nIccV2n.gif" alt="" />
              Sign in with Google
            </button>

            <button onClick={signInWithGoogle}>
        Sign In
      </button>
      <button onClick={handleLogout}>
        Log out
      </button>
          </div>

          <div className="google_user_details">
            <h1 className="google_username">jhony d Mwea:</h1>
          </div>
        </div>
        <div className="guset_sub">
          <div className="card">1</div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";
// eslint-disable-next-line no-unused-vars
// import firebase from './firebase.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router> */}
      <App />
      <Analytics />
    {/* </Router> */}
  </React.StrictMode>
);

// import React from 'react'
import Card from "./navcard/Card";
import Nav from "./nav/Nav";
import "animate.css";
import back from "../asset/back.webp";

export default function Layout() {
  return (
    <div>
      <Card />
        <Nav />

      <div className="rounder_img">
        <img loading="lazy" src={back} alt="" />
      </div>
    </div>
  );
}

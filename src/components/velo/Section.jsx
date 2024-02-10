/* eslint-disable no-unused-vars */
// ParallaxSection.js

import React from "react";
import Velo from "./Velo";
import "./velo.css";

function ParallaxSection() {
  return (
    <div className="sd">
      <Velo style={{ fontSize: "10px" }} baseVelocity={0.2}>
        <h1 style={{ fontSize: "30px" }}>
          Available from JANUARY 2023, always looking to collaborate with
          creators and creative teams. Let’s talk!
        </h1>
      </Velo>
      {/* <Velo style={{ fontSize: "50px" }} baseVelocity={2}>
      shop now
      </Velo> */}
    </div>
  );
}

export default ParallaxSection;

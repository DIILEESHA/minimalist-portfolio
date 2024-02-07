/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Template from "../../components/Template";
import "./project.css";

export default function Project() {
  return (
    <Template
      // scrollToGuestMessages={scrollToGuestMessages}
      guestBookDetails={{
        title: "My Creative  ",
        subtitle: "Portfolios",
        description: "Explore a showcase of my diverse projects and creations",
        arrowSrc: "https://i.imgur.com/EzZ16Wn.png",
        message: "Step into My World of Creativity!",
      }}
    >
      <div className="template_container">


        <div className="template_img">
          <img src="https://i.imgur.com/6xeQSQS.png" alt="" />
        </div>
        <h2 className="project_title">Nice stuff I've built</h2>
        {/* <h2 className="project_title">Nice stuff I've built</h2> */}

        <div className="project_top_area">
          <p className="fear">
            Strategic, meaningful, and impactful work for bold, forward-thinking
            brands as a one-man band and team player.
          </p>
        </div>

        
      </div>
    </Template>
  );
}

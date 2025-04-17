/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "atropos/css";
import 'animate.css';

import "./header.css";
import CountUp from "react-countup";
import skill from "./skill.json";
import Layout from "../Layout.jsx";
import Marquee from "react-marquee-slider";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    const counter = document.getElementById("counter");
    if (counter) {
      counter.innerText = "1234567";
    }
  }, []);
  return (
    <div className="header_container minvam ">

      <div className="minvam">


      <Layout />

      <div className="welcome_card animate__animated animate__fadeInDown">
        <div className="welcome_text">
          <div className="welcome_img">
            <img loading="lazy" src="https://i.imgur.com/qJzqbOj.png" alt="" />
          </div>
          <h2 className="welcome ">Dileesha Lakshan Welcome’s You!</h2>
        </div>
      </div>
      <div className="ok">
        <img className="ok_img" src="https://i.imgur.com/lGIeGtN.png" alt="" />
      </div>
      <div className="ok2">
        <img className="ok_img" src="https://i.imgur.com/xam90UC.png" alt="" />
      </div>

      <div className="header_description ">
        <div className="header_top_img">
          <img src="https://i.imgur.com/uzB2EiW.png" alt="" />
        </div>
        <p className="header_title">
          Revitalize Your Digital Impact through Boundless creativity
          {/* <br className="linebreak-desktop" /> */}
          {/* <span className="mooha">Creativity</span> */}
        </p>

        <p className="header_para">
          I am a passionate and experienced web designer, dedicated to creating
          visually stunning and highly functional websites. Explore my portfolio
          to see the power of effective design in action
        </p>
        <div className="header_btn_section">
          <div className="header_arrow">
            <img src="https://i.imgur.com/y1EhAHt.png" alt="" />
          </div>

          <div className="header_main_btn">
            <Link className="linka" to="/portfolio">
              
            <div className="smrona">let's work together</div>
            </Link>
          </div>
          <div className="header_sm_btn">
            <Link className="linka" to="/contact-me">
            <div className="lmrona">contact me</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="skiller_main">
        <div className="skill_section">
          <Marquee velocity={9} resetAfterTries={200} minScale={0.7}>
            {skill.map((skiller, index) => (
              <div className="skiller" key={index}>
                <h1 className="skill_name">{skiller.skill}✨</h1>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="projects_done">
        <div className="projects_grid">
          <div className="cir">
            <img src="https://i.imgur.com/Hn6C1eW.png" alt="" />
          </div>{" "}
          <div className="cir2">
            <img src="https://i.imgur.com/WqHE6fk.png" alt="" />
          </div>
          <div className="project_sub_grid">
            <h2 className="done">
              <CountUp enableScrollSpy duration={8} delay={3} end={15} />+
            </h2>
            <p className="done_para">Completed Projects</p>
          </div>{" "}
          <div className="project_sub_grid">
            <h2 className="done">
              0<CountUp enableScrollSpy duration={8} delay={3} end={16} />+
            </h2>
            <p className="done_para">Happy Customers</p>
          </div>{" "}
          <div className="project_sub_grid">
            <h2 className="done">
              0<CountUp enableScrollSpy duration={8} delay={3} end={2} />+
            </h2>
            <p className="done_para">Years of Experience</p>
          </div>{" "}
          <div className="project_sub_grid">
            <h2 className="done">
              <CountUp enableScrollSpy duration={8} delay={3} end={15} />+
            </h2>
            <p className="done_para">Recognition Received</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

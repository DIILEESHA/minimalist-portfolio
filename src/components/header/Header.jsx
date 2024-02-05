/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "atropos/css";
import "./header.css";
import CountUp, { useCountUp } from "react-countup";
import skill from "./skill.json";
import Marquee from "react-fast-marquee";
import Layout from "../Layout.jsx";

export default function Header() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="header_container">
      <Layout />

      <div className="welcome_card">
        <div className="welcome_text">
          <div className="welcome_img">
            <img loading="lazy" src="https://i.imgur.com/qJzqbOj.png" alt="" />
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
      <div className="ok2"></div>

      <div className="header_description">
        <div className="header_top_img">
          <img src="https://i.imgur.com/uzB2EiW.png" alt="" />
        </div>
        <h1 className="header_title">
          Revitalize Your Digital Impact through Boundless
          <span className="mooha">Creativity</span>
        </h1>

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
            <button className="smr">let's work together</button>
          </div>
          <div className="header_sm_btn">
            <button className="lmr">contact me</button>
          </div>
        </div>
      </div>
      <div className="skiller_main">
        <div className="skill_section">
          <Marquee
          // autoFill={true}
          // gradient={true}
          // gradientColor={"#1c1c21"}
          // gradientWidth={-1}
          // play={true}
          >
            {skill.map((skiller, index) => (
              <div className="skiller" key={index}>
                <h1 className="skill_name">{skiller.skill}✨</h1>
                {/* <img
                  height={15}
                  src="https://media.tenor.com/4BLFp8PpGCAAAAAj/gesture-hi.gif"
                  alt=""
                /> */}
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
              0<CountUp enableScrollSpy duration={8} delay={3} end={5} />+
            </h2>
            <p className="done_para">Happy Customers</p>
          </div>{" "}
          <div className="project_sub_grid">
            <h2 className="done">
              0<CountUp enableScrollSpy duration={8} delay={3} end={1} />+
            </h2>
            <p className="done_para">Years of Experience</p>
          </div>{" "}
          <div className="project_sub_grid">
            <h2 className="done">
              <CountUp enableScrollSpy duration={8} delay={3} end={12} />+
            </h2>
            <p className="done_para">Recognition Received</p>
          </div>
        </div>
      </div>
    </div>
  );
}

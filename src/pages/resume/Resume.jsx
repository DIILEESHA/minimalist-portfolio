/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ResumeLayout from "./ResumeLayout";
import { FaArrowRight } from "react-icons/fa6";
import pdf from "../../pdf/Dileesha-Lakshan.pdf";

export default function Resume() {
  useEffect(() => {
    document.title = " Resume | Dileesha Nawarathna ";
  }, []);
  return (
    // <div>
    <ResumeLayout
      guestBookDetails={{
        title: "My   ",
        subtitle: "resume💼",
        description:
          "Step into my professional journey, where I've delved into education and mastered the art of crafting scalable solutions. Let's discover together ",
        arrowSrc: "https://i.imgur.com/EzZ16Wn.png",
        message: " Charting My Path!",
      }}
    >
      <div className="resumer">
        <div className="template_img">
          <img src="https://i.imgur.com/iATj14h.png" alt="" />
        </div>
        <h2 className="project_title">My Journey</h2>
        <div className="project_top_area">
          <p className="fear">
            Embark on my dynamic journey, evolving from education to creating
            adaptable solutions.
          </p>
        </div>
        {/* <br /> */}
        <h2 className="project_title koha">education</h2>

        <div className="education_container">
          <div className="linoman">
            <div className="linoone">
              <img
                className="linoimg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_idXubrQNBwKu9Jm7dY4QoCqWx0ZPh32lkw&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="education_time">AUGUST 2020 · PRESENT</h2>
            <h2 className="degree">BSc in Information Technology</h2>
            <h2 className="campus">
              Sri Lanka Institue Of Information Technology
            </h2>
            <p className="short_des">
              I am currently enrolled as a student in the Sri Lanka Institute of
              Information Technology ( SLIIT ) pursuing a Information Technology
              undergraduate degree. I’m on a journey of continuous learning,
              driven by passion for web development and design
            </p>
          </div>

          <div className="linoman">
            <div className="linoone">
              {/* <div className="kp"></div> */}
              <img
                className="linoimg"
                src="https://i.imgur.com/2livgBw.png"
                alt=""
              />
            </div>
            <h2 className="education_time">2007 - 2017</h2>
            <h2 className="degree">Schooling</h2>
            <h2 className="campus">
              President College - Ambagasdowa, Sri Lanka
            </h2>
            <p className="short_des">
              In my schooling journey, I've successfully completed Ordinary
              Level and Advanced Level Examinations with a specialization in
              Engineering Technology.
            </p>
          </div>
        </div>

        <h2 className="project_title koha">work exprience</h2>

        <div className="education_container">
          {/* <div className="linoman">
            <div className="linoone">
              <img
                className="linoimg"
                src="https://i.imgur.com/u0aa5KQ.jpeg"
                alt=""
              />
            </div>
            <h2 className="education_time">MAR. 2024 PRESENT</h2>
            <h2 className="degree">Trainee Software Developer</h2>
            <h2 className="campus">CWS</h2>
            <p className="short_des">
              In my new role, I'm excited to apply my expertise in PHP Laravel
              and JavaScript to drive innovation in web projects. With a focus
              on intuitive user interfaces and front-end aesthetics, I aim to
              contribute significantly to our team's development efforts. Eager
              to collaborate within a dynamic environment,
            </p>
          </div> */}
          <div className="linoman">
            <div className="linoone">
              <img
                className="linoimg"
                src="https://i.imgur.com/xhFvZA6.jpeg"
                alt=""
              />
            </div>
            <h2 className="education_time">SEP. 2022 · MAR. 2023</h2>
            <h2 className="degree">Trainee Software Developer</h2>
            <h2 className="campus">CodeTech LK</h2>
            <p className="short_des">
              Engaged as a Front-end developer, I contributed significantly to
              web applications by crafting intuitive user interfaces.
              Successfully boosted front-end aesthetics using ReactJs and CSS,
              and played a key role in advancing the team's development efforts.
            </p>
          </div>

          <div className="linoman">
            <div className="linoone">
              {/* <div className="kp"></div> */}
              <img
                className="linoimg"
                src="https://i.imgur.com/mNJoc2V.png"
                alt=""
              />
            </div>
            <h2 className="education_time">AUGUST 2022 · PRESENT</h2>
            <h2 className="degree">Freelancer</h2>
            <h2 className="campus">Fiverr</h2>
            <p className="short_des">
              As a seasoned freelancer on Fiverr, I focus on crafting custom web
              applications, eye-catching web designs, and user-friendly
              interfaces. With a sharp attention to detail and a love for
              creativity, I'm dedicated to delivering top-notch projects
              tailored specifically to you.
            </p>
          </div>
        </div>

        <div className="resumes">
          <a className="linka" href={pdf} download>
            <h2 style={{ position: "relative" }} className="resume">
              Download My
              <span className="mooha">Resume</span>
              <FaArrowRight />
            </h2>
          </a>
        </div>
      </div>
    </ResumeLayout>
    // </div>
  );
}

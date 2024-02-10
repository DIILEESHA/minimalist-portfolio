/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./contact.css";
import Faq from "../../components/faq/Faq";
import Layout from "../../components/Layout";

import Section from "../../components/velo/Section";

export default function Contact() {
  useEffect(() => {
    document.title = " Contact Me | Dileesha Nawarathna ";
  }, []);
  return (
    <div className="contact_main">
      <div className="contact_container mainavm2">
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
            <h2 className="welcome">Join the Conversation!</h2>
          </div>
        </div>
        <div className="header_description">
          <div className="aligno"></div>

          <h1 className="header_title ">
            We’d
            <video
              autoPlay
              className="keo"
              src="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1655749016/Group%20256/Info%20Page%20Files/Collaboration_ftw_eu4wjq.mp4"
            ></video>
            Love to here from you.
          </h1>

          <p className="header_para">
            Ready to connect and collaborate – drop me a line and let's turn
            ideas into reality!
          </p>
        </div>

        <Section />
      </div>

      <div className="contact_form_section two">
        <div className="contact_grida">
          <div className="contact_sub_grida">
            <form action="" className="contact_form">
              <div className="contact_imger">
                <img
                  className="boomba"
                  src="https://i.imgur.com/baykvWY.png"
                  alt=""
                />
              </div>

              <div className="contact_sub_form">
                <label className="form_label" htmlFor="">
                  name
                </label>
                <div className="contact_form_input">
                  <input
                    className="contact_input"
                    type="text"
                    placeholder="your name"
                  />
                </div>
              </div>

              <div className="contact_sub_form">
                <label className="form_label" htmlFor="">
                  Company Name
                </label>
                <div className="contact_form_input">
                  <input
                    className="contact_input"
                    type="text"
                    placeholder="your name"
                  />
                </div>
              </div>

              <div className="contact_sub_form">
                <label className="form_label" htmlFor="">
                  Email
                </label>
                <div className="contact_form_input">
                  <input
                    className="contact_input"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="contact_sub_form">
                <label className="form_label" htmlFor="">
                  Phone Number
                </label>
                <div className="contact_form_input">
                  <input
                    className="contact_input"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="contact_sub_form  mkl">
                <label className="form_label" htmlFor="">
                  Services Required
                </label>
                <div className="servicers">
                  <div className="service_sub">
                    <img src="https://i.imgur.com/yThf8CL.png" alt="" />
                    <h2 className="servicer_type">Web Design</h2>
                  </div>

                  <div className="service_sub">
                    <img src="https://i.imgur.com/yThf8CL.png" alt="" />
                    <h2 className="servicer_type">UI UX Design</h2>
                  </div>

                  <div className="service_sub">
                    <img src="https://i.imgur.com/yThf8CL.png" alt="" />
                    <h2 className="servicer_type">Web Development</h2>
                  </div>

                  <div className="service_sub">
                    <img src="https://i.imgur.com/yThf8CL.png" alt="" />
                    <h2 className="servicer_type">Web Optimizations</h2>
                  </div>
                </div>
              </div>

              <div className="contact_sub_form mkl">
                <label className="form_label" htmlFor="">
                  Message
                </label>
                <div className="contact_form_input">
                  <textarea
                    className="contact_text"
                    name=""
                    id=""
                    cols="30"
                    placeholder="your message..."
                    rows="10"
                  ></textarea>
                </div>
              </div>

              <div className="contact_sub_form mkl">
                <div className="btn_opt">
                  <button className="form_btn">send a message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact_sub_grida buha">
            <div className="sma_card">
              <div className="sma_sub_card">
                <div className="sma_details">
                  <h1 className="sma_title">You can Email Me Here</h1>
                  <h2 className="sma_email">dileeshawork@gmal.com</h2>
                </div>
                <div className="sma_details2">
                  <img src="https://i.imgur.com/Ddm9Oz8.png" alt="" />
                </div>
              </div>
            </div>
            <div className="sma_card">
              <div className="sma_sub_card">
                <div className="sma_details">
                  <h1 className="sma_title">Location</h1>
                  <h2 className="sma_email">dileeshawork@gmal.com</h2>
                </div>
                <div className="sma_details2">
                  <img src="https://i.imgur.com/Ddm9Oz8.png" alt="" />
                </div>
              </div>
            </div>
            <div className="sma_card">
              <div className="sma_sub_card">
                <div className="sma_details">
                  <h1 className="sma_title">Give Me a Call on</h1>
                  <h2 className="sma_email">+94 72 130 4013</h2>
                </div>
                <div className="sma_details2">
                  <img src="https://i.imgur.com/Ddm9Oz8.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq />
    </div>
  );
}

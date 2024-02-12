/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./contact.css";
import Faq from "../../components/faq/Faq";
import Layout from "../../components/Layout";
import Section from "../../components/velo/Section";
import { Helmet } from "react-helmet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef();
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(
        selectedServices.filter((service) => service !== serviceName)
      );
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append("selectedServices", selectedServices.join(", "));

    emailjs
      .sendForm(
        "service_45r525n",
        "template_xckj6nm",
        formRef.current,
        "c0OCPezx-EbyzmYf3"
      )
      .then(
        (result) => {
          console.log("ok");
          toast.success("Great! You're all set! Cheers!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("No Internet Connection, Try Again!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  useEffect(() => {
    document.title = " Contact Me | Dileesha Nawarathna ";
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact Me | Dileesha Nawarathna</title>
        <meta
          name="description"
          content="Ready to connect and collaborate? Drop me a line and let's turn ideas into reality!"
        />
        <meta property="og:title" content="Contact Me | Dileesha Nawarathna" />
        <meta
          property="og:description"
          content="Ready to connect and collaborate? Drop me a line and let's turn ideas into reality!"
        />
        {/* <meta property="og:image" content="https://example.com/your-image.jpg" /> */}
        <meta
          property="og:url"
          content="https://www.dileeshanawarathna.me/contact-me"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="template_img">
        <img src="https://i.imgur.com/Wg6uLJe.png" alt="" />
      </div>

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
        <ToastContainer />
        <div className="contact_grida">
          <div className="contact_sub_grida">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact_form"
            >
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
                    name="name"
                    required
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
                    name="companyName"
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
                    name="email"
                    required
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
                    name="phoneNumber"
                    required
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="contact_sub_form  mkl required">
                <label className="form_label" htmlFor="">
                  Services Required
                </label>
                <div className="servicers required">
                  <div
                    className="service_sub"
                    onClick={() => handleServiceChange("Web Design")}
                    style={{
                      backgroundColor: selectedServices.includes("Web Design")
                        ? "#131316"
                        : "initial",
                    }}
                  >
                    <img src="https://i.imgur.com/yThf8CL.png" alt="" />
                    <h2 className="servicer_type">Web Design</h2>
                  </div>

                  <div
                    className="service_sub"
                    onClick={() => handleServiceChange("UI UX Design")}
                    style={{
                      backgroundColor: selectedServices.includes("UI UX Design")
                        ? "#131316"
                        : "initial",
                    }}
                  >
                    <img src="https://i.imgur.com/yThf8CL.png" alt="" />
                    <h2 className="servicer_type">UI UX Design</h2>
                  </div>

                  <div
                    className="service_sub"
                    onClick={() => handleServiceChange("Web Development")}
                    style={{
                      backgroundColor: selectedServices.includes(
                        "Web Development"
                      )
                        ? "#131316"
                        : "transparent",
                    }}
                  >
                    <img src="https://i.imgur.com/yThf8CL.png" alt="" />
                    <h2 className="servicer_type">Web Development</h2>
                  </div>

                  <div
                    className="service_sub"
                    onClick={() => handleServiceChange("Web Optimizations")}
                    style={{
                      backgroundColor: selectedServices.includes(
                        "Web Optimizations"
                      )
                        ? "#131316"
                        : "initial",
                    }}
                  >
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
                    name="message"
                    required
                    id=""
                    cols="30"
                    placeholder="your message..."
                    rows="10"
                  ></textarea>
                </div>
              </div>

              <div className="contact_sub_form mkl">
                <div className="btn_opt">
                  <button className="form_btn">Send a Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact_sub_grida buha">
            <div className="sma_card">
              <div className="sma_sub_card">
                <div className="sma_details">
                  <h1 className="sma_title">You can Email Me Here</h1>
                  <h2 className="sma_email">
                    {" "}
                    <a
                      className="linka"
                      style={{
                        color: "inherit",
                        textDecoration: "underline",
                      }}
                      // color={#d85040}
                      href="mailto:hello@dileeshanawarathna.me"
                    >
                      hello@dileeshanawarathna.me
                    </a>
                  </h2>
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
                  <h2 className="sma_email">Malabe,Sri Lanka</h2>
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
                  <h2 className="sma_email">
                    <a
                      className="linka"
                      style={{
                        color: "inherit",
                        textDecoration: "underline",
                      }}
                      href="tel:+94721304013"
                    >
                      +94 72 130 4013
                    </a>
                  </h2>
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

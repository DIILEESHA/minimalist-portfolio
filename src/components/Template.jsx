/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import '../pages/guest/guest.css'

export default function Template({
  children,
  scrollToGuestMessages,
  guestBookDetails,
}) {
  // Extract the first child and the rest of the children
  const [firstChild, ...restChildren] = React.Children.toArray(children);

  return (
    <div className="guest_container">
      <div className="minavam">
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
            <h2 className="welcome">
                {guestBookDetails.message}
               
                </h2>
          </div>
        </div>
       
        <div className="guest_book_details">
          <h1 className="guest_book_detail_title">
            {guestBookDetails?.title}

            <br className="colab" />
            <span className="mooha qq">{guestBookDetails?.subtitle}</span>
          </h1>
          <p className="guest_para">{guestBookDetails?.description}</p>
        </div>
      </div>

      <div className="guest_grid_container" id="guestMessages">
        {firstChild}
        <div className="guest_sub guest_sub2">
          <div className="card_gap">
            <div className="newsletter_card">
              <div className="newsletter_img_section">
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/719734/pexels-photo-719734.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <img
                  className="personas"
                  src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>

              <h2 className="sub">Subscribe to my newsletter!</h2>
              <p className="sub_para">
                Follow my journey, I write about tech, my experiences and more.
              </p>

              <div className="email_section">
                <input
                  required
                  placeholder="your email....."
                  type="email"
                  className="email_input"
                />
                <button className="email_btn">subscribe</button>
              </div>
            </div>

            <div className="thanks_card">
              <div className="thanks_flex">
                <div
                  style={{
                    fontSize: "30px",
                    margin: "-7px 0 0px 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  👋
                </div>
                <h2 className="thank">Thanks for visiting my site!</h2>
              </div>
              <h2 className="glad">Glad to have you here.</h2>

              <Link to="/guest-book" className="linka">
                <div className="leave_option">
                  <div className="text_leave">
                    <p className="mkov">Leave a message on my guestbook</p>
                  </div>
                  <div className="arrowme">
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
              <div className="leave_options">
                <div className="text_leave">
                  <a className="linka" href="mailto:dileeshawork@gmail.com">
                    <p className="i">Send an email</p>
                  </a>
                </div>
                <div className="arrowme">
                  <FaArrowRight className="mp" />
                </div>
              </div>
            </div>

            <div className="recommendations maha">
              <h2 className="sub">Recommendations / Kind words</h2>
              <p className="mkov">
                <Link className="linka" to="/#recommend">
                  See recommendations here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

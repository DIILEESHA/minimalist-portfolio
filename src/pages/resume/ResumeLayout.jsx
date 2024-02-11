/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import "../guest/guest.css";
import skillsData from "./skill.json";
import "./resume.css";

export default function Template({
  children,
  //   scrollToGuestMessages,
  guestBookDetails,
}) {
  const tools = skillsData.filter((item) => item.category === "tool");
  const skills = skillsData.filter((item) => item.category === "skill");

  // Extract the first child and the rest of the children
  // eslint-disable-next-line no-unused-vars
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
            <h2 className="welcome">{guestBookDetails.message}</h2>
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
        <div className="guest_sub ">
          <div className="card_gap">
            <div className="recommendations">
              <h2 className="sub">Technical Skills</h2>
              {skills.map((skill, index) => (
                <p key={index} className="mkov makov">
                  <div className="line_skil"></div>
                  {skill.lng}
                </p>
              ))}
            </div>
            <div className="recommendations maha">
              <h2 className="sub">Tools I know</h2>
              {tools.map((tool, index) => (
                <p key={index} className="mkov makov">
                  <div className="line_skil"></div>

                  {tool?.lng}
                </p>
              ))}
            </div>
            <div className="recommendations moi">
              <h2 className="sub">Recommendations / Kind words</h2>
              <p className="mkov makov">
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

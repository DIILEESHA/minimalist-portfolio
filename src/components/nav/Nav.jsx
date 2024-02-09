import { useState } from "react";
import "./nav.css";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    const scrollDuration = 500; // adjust as needed
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  // eslint-disable-next-line no-unused-vars
  const handleNavLinkClick = (path) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <div className="nav_container">
      <div className="nav_grid">
        <div className="nav_logo">
          <img src="https://i.imgur.com/fYuFZ2C.png" alt="" />
        </div>
        <div className="nav_links">
          <ul className="nav_ul">
            <li className="nav_li">
              <NavLink to="/" className="linka">
                home
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/about-me" className="linka">
                about me
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/portfolio" className="linka">
                portfolio
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/guest-book" className="linka">
                guestbook
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav_links2">
          <ul className="nav_ul_last">
            <li className="nav_li_last">
              <NavLink className="linka" to="/contact-me">
                contact
              </NavLink>
            </li>
            <div className="nav_lis" onClick={() => setOpen(!open)}>
              {open ? (
                <>
                  <img
                    className="thusa"
                    src="https://i.imgur.com/2BR135G.png"
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img
                    className="thusa"
                    src="https://i.imgur.com/gCNjZrm.png"
                    alt=""
                  />
                </>
              )}
            </div>
          </ul>
        </div>
      </div>

      <div
        className="nav_mobile_ul_section"
        style={{ right: open ? "0px" : "-500vw" }}
      >
        <div className="align_mobile">
          <p className="meow_title">
            Thank you for visiting my portfolio! Explore my projects,
            technologies, and experiences.
            <Link to="/guestbook" className="guestbook_link">
              Leave a Message❤️
            </Link>
          </p>

          <div className="koob"></div>

          <div className="socia">
            <FaLinkedin />
            <FaTwitter />
            <FaGithub />
          </div>

          <ul className="nav_mobile_uls">
            <div className="for">
              <li className="nav_mobile_li">
                {" "}
                <NavLink to="/" className="linka">
                  home
                </NavLink>
              </li>
              <li className="nav_mobile_li">
                {" "}
                <NavLink to="/about-me" className="linka">
                  about me
                </NavLink>
              </li>
              <li className="nav_mobile_li">
                <NavLink to="/portfolio" className="linka">
                  portfolio
                </NavLink>
              </li>
              <li className="nav_mobile_li">
                {" "}
                <NavLink to="/guest-book" className="linka">
                  guestbook
                </NavLink>
              </li>
              <li className="nav_mobile_li">
                {" "}
                <NavLink className="linka" to="/contact-me">
                  contact
                </NavLink>
              </li>
            </div>

            <div className="div">
              <h1 className="divs">Design & Develop by Dileesha❤️</h1>
            </div>
          </ul>
        </div>
        <div className="gaser">
          <div className="nav_logos">
            <img src="https://i.imgur.com/fYuFZ2C.png" alt="" />
          </div>
          <div className="thusa_img">
            <img
              onClick={() => setOpen(!open)}
              className="thusa"
              src="https://i.imgur.com/2BR135G.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}

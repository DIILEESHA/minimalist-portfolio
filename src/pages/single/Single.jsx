/* eslint-disable react/prop-types */
import { BiWorld } from "react-icons/bi";
import "./single.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Single({ project, onclose }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [lo, setLo] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLo(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    // className: "slider1",
    cssEase: "linear",
    fade: true,
    arrows:false
  };
  return (
    <div className="singlea_container">
      <div className="singa">
        <div className="singo">

          {/* 1 */}
          <div className="nav_single">
            <div className="single_close_popup">
              <IoCloseSharp onClick={onclose} />
            </div>
            <div className="single_line"></div>
          </div>


          {/* 2 */}
          <div className="single_content_selector">
       
            <h2 className="single_title">{project?.title}</h2>

            {lo ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "10vh",
                }}
              >
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#fff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <div className="image_section">
                <Slider {...settings}>
                  {project?.images?.map((image, index) => (
                    <img
                      loading="lazy"
                      key={index}
                      className="single_position_img"
                      src={image?.asset?.url}
                      alt={project?.title}
                    />
                  ))}
                </Slider>
              </div>
            )}

            <h2 className="single_about">about</h2>
            {project && <p className="single_para">{project.description}</p>}

            <h2 className="single_about">technologies</h2>
            <div className="single_technology_card">
              {project.technologies ? (
                <>
                  {project?.technologies?.map((tech, index) => (
                    <div key={index} className="single_tech_card">
                      <h3 className="tech">{tech}</h3>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <h1 className="web_link">No Technologies mentioned</h1>
                </>
              )}
            </div>
            <div className="web_link">
              <BiWorld />
              <h2 className="single_about">Website</h2>
            </div>

            {project?.websiteUrl ? (
              <a
                className="web_link"
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project?.websiteUrl}
              </a>
            ) : (
              <>
                <h1 className="web_link">
                  These site is underconstruction. please wait❤️
                </h1>
              </>
            )}

            <div className="github">
              <FaGithub />
              <h2 className="single_about">Github</h2>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project?.gitUrl}
              className="web_link"
            >
              {project?.gitUrl}
            </a>
          </div>



          {/* 3 */}
          <div className="project_navigator">
            <div className="project_navigate_card">
              <a
                href={project?.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="navigator_title linka"
              >
                open project
              </a>
              <FaExternalLinkAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

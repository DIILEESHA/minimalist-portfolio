/* eslint-disable react/prop-types */
import { BiWorld } from "react-icons/bi";
import "./single.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Single({ project, onclose }) {
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
  };
  return (
    <div className="singlea_container">
      <div className="singa">
        <div className="nav_single">
          <div className="single_close_popup">
            <IoCloseSharp onClick={onclose} />
          </div>
          <div className="single_line"></div>
        </div>
        <div className="single_content_selector">
          {/* <h3 className="single_type">
            {project.type}
          </h3> */}
          <h2 className="single_title">{project?.title}</h2>
          {project?.images ? ( 
            <div className="image_section">
              <Slider {...settings}>
                {project.images.map((image, index) => (
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
          ) : (
            <>
              <h1>no image</h1>
            </>
          )}
          <h2 className="single_about">about</h2>
          <p className="single_para">{project?.description}</p>

          <h2 className="single_about">technologies</h2>
          <div className="single_technology_card">
            <div className="single_tech_card">
              <h3 className="tech">react</h3>
            </div>
            <div className="single_tech_card">
              <h3 className="tech">react</h3>
            </div>
          </div>
          <div className="web_link">
            <BiWorld />
            <h2 className="single_about">Website</h2>
          </div>

          <a
            className="web_link"
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.websiteUrl}
          </a>
          <div className="github">
            <FaGithub />
            <h2 className="single_about">Github</h2>
          </div>
          <a href={project?.gitUrl} className="web_link">
            {project?.gitUrl}
          </a>
        </div>
        <div className="project_navigator">
          <div className="project_navigate_card">
            <h1 className="navigator_title">open project</h1>
            <FaExternalLinkAlt />
          </div>
        </div>
      </div>
    </div>
  );
}

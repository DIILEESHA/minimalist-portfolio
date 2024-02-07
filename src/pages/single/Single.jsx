import { BiWorld } from "react-icons/bi";
import "./single.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Single() {
  return (
    <div className="single_container">
      <div className="singa">
        <div className="nav_single">
          <div className="single_close_popup">
            <IoCloseSharp />
          </div>
          <div className="single_line"></div>
        </div>
        <div className="single_content_selector">
          <h2 className="single_title">Zeedas</h2>
          <h3 className="single_type">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>

          <div className="image_section">
            <img
            className="single_position_img"
              src="https://i.ibb.co/bXTCNhY/Screen-Shot-2019-11-23-at-2-15-47-PM.png"
              alt=""
            />
          </div>
          <h2 className="single_about">about</h2>
          <p className="single_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur fugiat assumenda quam vero nobis quas? Quis impedit
            tempora nisi reprehenderit.
          </p>

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
            <h2 className="single_about">technologies</h2>
          </div>
          <div className="github">
            <FaGithub />
          </div>
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

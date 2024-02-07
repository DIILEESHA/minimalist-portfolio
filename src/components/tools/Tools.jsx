/* eslint-disable react/no-unescaped-entities */
import "./tools.css";
import tools from "./tools.json";

export default function Tools() {
  return (
    <div className="tool_container">
      <div className="servicer1">
        <img loading="lazy" src="https://i.imgur.com/7eybJk6.png" alt="" />
      </div>
      <h2 className="skill_title">My Expertise</h2>
      <p className="skills_para">
        As a I bring a well-rounded skill set to the table, making me a
        versatile
        <span className="mooha" style={{ fontWeight: "700" }}>
          web developer.
        </span>
        Here's a glimpse of my capabilities
      </p>

      <div className="tools_grid">
        {tools.map((tool, index) => (
          // <>
          <div className="tools_sub_grid" key={index}>
            <div className="tools_img">
              <img src={tool.img} alt="" />
            </div>
            <div className="tools_details">
              <h1 className="tool_titles">{tool.title}</h1>
              <div className="tools_paragraph_section">
                <p>{tool.para}</p>
              </div>
            </div>
          </div>
          // </>
        ))}
      </div>
    </div>
  );
}

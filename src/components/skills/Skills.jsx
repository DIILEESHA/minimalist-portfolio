import "./skills.css";
import skill from "./skill.json";
import "atropos/css";
import Atropos from "atropos/react";

export default function Skills() {
  return (
    <div className="skill_container">
      <div className="servicer">
        <img loading="lazy" src="https://i.imgur.com/owptLne.png" alt="" />
      </div>

      <h2 className="skill_title">Elevate Your Digital Presence</h2>
      <p className="skills_para">
        As a
        <span className="mooha" style={{ fontWeight: "700" }}>
          web designer/developer
        </span>
        , I possess a diverse set of skills and expertise to bring your web
        design visions to life
      </p>

      <div className="skill_grid">
        {skill.map((skill) => (
          <>
            <Atropos
              activeOffset={0}
              shadow={false}
              highlight={true}
              rotateYMax={0.00000001}
              rotateXMax={0.00000000001}
              shadowScale={0}
              onEnter={() => console.log("Enter")}
              onLeave={() => console.log("Leave")}
              onRotate={(x, y) => console.log("Rotate", x, y)}
            >
              <div className="skill_sub_grid">
                <div className="skill_img">
                  <img loading="lazy" src={skill?.img} alt={skill?.title} />
                </div>

                <div className="skill_details">
                  <h1 className="skill_titles">{skill.title}</h1>
                  <div className="paragraph_section">
                    <p>{skill?.para}</p>
                  </div>
                </div>
              </div>
            </Atropos>
          </>
        ))}
      </div>
    </div>
  );
}

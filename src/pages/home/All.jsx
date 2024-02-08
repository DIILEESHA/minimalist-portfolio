import Project from "../projects/Project.jsx";
import "./home.css";

export default function All() {
  return (
    <div className="homer">
      <div className="template_img">
        <img src="https://i.imgur.com/Wg6uLJe.png" alt="" />
      </div>
      <Project />
    </div>
  );
}

import Layout from "../../components/Layout";
import "./about.css";

export default function About() {
  return (
    <div className="about_container">
      <Layout />

      <div className="welcome_card">
        <div className="welcome_text">
          <div className="welcome_img">
            <img loading="lazy" src="https://i.imgur.com/qJzqbOj.png" alt="" />
          </div>
          <h2 className="welcome">
            Crafting digital experiences, one line of code at a time.
          </h2>
        </div>
      </div>
      <div className="header_description">
        <div className="aligno">
          <h1 className="header_titles">
            I'm
            {/* <span className="mooha">Creativity</span> */}
          </h1>
          <img
            className="mlpo"
            // style={{ margin: "10px 0" }}
            src="https://i.imgur.com/kvq4PKA.png"
            alt=""
          />
        </div>

        <h1 className="header_title moi">
          Dileesha🤟.
          <video
            autoPlay
            className="keo"
            src="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1655749016/Group%20256/Info%20Page%20Files/Collaboration_ftw_eu4wjq.mp4"
          ></video>
          A collabrative Web Developer
        </h1>

        <p className="header_para">
          I am a skilled web designer with a passion for creating visually
          stunning and user-friendly websites. With a keen eye for detail and a
          commitment to excellence, I specialize in crafting online experiences
          that leave a lasting impression.
        </p>
      </div>
    </div>
  );
}

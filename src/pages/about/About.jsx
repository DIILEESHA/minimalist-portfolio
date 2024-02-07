/* eslint-disable react/no-unescaped-entities */
import Layout from "../../components/Layout";
import "./about.css";
import Section from "../../components/velo/Section";
import Faq from "../../components/faq/Faq";
import { IoLogoGithub } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
// import ReactTyped from "react-typed";


export default function About() {
  return (
    <div className="about_container">
      <div className="mina">
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
            <h2 className="welcome">Crafting digital experiences.</h2>
          </div>
        </div>
        <div className="header_description">
          <div className="aligno">
            {/* <h1 className="header_titles">
            I'm
          </h1>
          <img
            className="mlpo"
            // style={{ margin: "10px 0" }}
            src="https://i.imgur.com/kvq4PKA.png"
            alt=""
          /> */}
          </div>

          <h1 className="header_title ">
            I'm Dileesha🤟.
            <video
              autoPlay
              className="keo"
              src="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto/v1655749016/Group%20256/Info%20Page%20Files/Collaboration_ftw_eu4wjq.mp4"
            ></video>
            A collabrative Web Developer
          </h1>

          <p className="header_para">
            I am a skilled web designer with a passion for creating visually
            stunning and user-friendly websites. With a keen eye for detail and
            a commitment to excellence, I specialize in crafting online
            experiences that leave a lasting impression.
          </p>
        </div>

        <Section />
      </div>
      <div
        className="about_second"
        style={{ position: "relative", zIndex: "1" }}
      >
        <div className="about_control">
          {/* second */}
          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">
                Engineering <IoLogoGithub />
              </h2>
              <h2 className="about_maina">View Github</h2>
            </div>

            <p className="about_maina_para">
              The power of first impressions cannot be underestimated, and the
              gateway to capitalizing on them lies in exceptional website
              design. An outstanding website transcends mere aesthetics and
              extends its influence to encompass seamless functionality and
              user-friendly navigation. Drawing upon my expertise as a seasoned
              programmer, I possess the unique ability to tackle intricate
              technical challenges while crafting websites that exude sleekness
              and visual allure. Moreover, my extensive knowledge of recognized
              technical standards is complemented by my proficiency in modern
              building practices, ensuring that every aspect of your website is
              finely tuned to perfection.
            </p>
          </div>
          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">
                Product <GiWorld />
              </h2>
              <h2 className="about_maina">View Products</h2>
            </div>

            <p className="about_maina_para">
              While I may not fit the conventional mold of a product manager, my
              diverse skill set in research, product design, and product
              coordination empowers me to drive the growth of a product from its
              inception. As an exceptional analytical thinker, I possess the
              ability to uphold the product's vision throughout its entire
              journey, effectively bridging the technical and product aspects.
              By leveraging my expertise, I can navigate the path from 0 to 1,
              ensuring the product's success at every stage.
            </p>
          </div>
          {/* third */}
          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">
                Design <GiWorld />
              </h2>
              <h2 className="about_maina">View Design</h2>
            </div>

            <p className="about_maina_para">
              Despite not fitting the typical designer stereotype, my
              exceptional visual abilities enable me to excel as a presenter,
              effectively conveying design concepts to stakeholders and design
              teams. I possess a remarkable aptitude for conceptualization,
              allowing me to envision and bring forth stunning creations.
              Additionally, my expertise lies in fine-tuning stylesheets and
              crafting seamless user experiences that flow effortlessly.
            </p>
          </div>
        </div>

        {/* <Languages/> */}
        <Faq />
      </div>
    </div>
  );
}

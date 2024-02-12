/* eslint-disable react/no-unescaped-entities */
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import "./about.css";
import Section from "../../components/velo/Section";
import Faq from "../../components/faq/Faq";
import { IoLogoGithub } from "react-icons/io";
// import { GiWorld } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { SiCodesignal } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = " About Me | Dileesha Nawarathna ";
  }, []);
  return (
    <div className="about_container">
      <Helmet>
        <title>About Me | Dileesha Nawarathna</title>
        <meta
          name="description"
          content="Explore the skills and experiences of Dileesha Lakshan, a collaborative web developer."
        />
        <meta property="og:title" content="About Me | Dileesha Nawarathna" />
        <meta
          property="og:description"
          content="Explore the skills and experiences of Dileesha Lakshan, a collaborative web developer."
        />
        <meta
          property="og:url"
          content="https://www.dileeshanawarathna.me/about-me"
        />
        <meta property="og:type" content="website" />
      </Helmet>
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
        <div className="template_img">
          <img src="https://i.imgur.com/TirU4Is.png" alt="" />
        </div>

        <h2 className="abo">about me</h2>
        <div className="about_control">
          {/* second */}
          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">
                Engineering <IoLogoGithub />
              </h2>
              <h2 className="about_maina">
                <a
                  className="linka"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/DIILEESHA"
                >
                  View Github
                </a>
              </h2>
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
                Product <BiWorld />
              </h2>
              <h2 className="about_maina">
                <Link className="linka" to="/portfolio">
                  View Products
                </Link>
              </h2>
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
                Design <SiCodesignal />
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
        <h2 className="abo">my reads</h2>
        <div className="about_control">
          {/* second */}
      
          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">
                <a
                  className="linka"
                  href="https://www.sololearn.com/Certificate/CT-CMGV1Y4I/jpg"
                >
                  Mastering Responsive Web Design |
                </a>
                <img
                  style={{ width: "10px", height: "10px", borderRadius: "50%" }}
                  src="https://media.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1630576160230/sololearn_inc__logo?e=1715212800&v=beta&t=4Ts2SLp-p2dKsMfS0HBC8mTiiZCQIdSQNylZuJxjQyw"
                  alt=""
                />
              </h2>
              <h2 className="about_maina">
                <FaCalendarAlt /> 2022
              </h2>
            </div>

            <p className="about_maina_para">
              Enhance your skills in front-end development with our specialized
              course on responsive web design. Gain proficiency in creating
              websites that adapt seamlessly to various devices and screen
              sizes. Learn best practices for building user-friendly and
              visually appealing interfaces that provide an optimal viewing
              experience across all platforms.
            </p>
          </div>
          {/* third */}
          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">
                <a
                  className="linka"
                  href="https://www.coursera.org/account/accomplishments/certificate/C2QMJKEJ7HDC"
                >
                  Foundations of Front-End Development |
                </a>
                <img
                  loading="lazy"
                  style={{ width: "10px", height: "10px", borderRadius: "50%" }}

                  src="https://media.licdn.com/dms/image/C4E0BAQFdNatYGiBelg/company-logo_100_100/0/1636138754252/facebook_logo?e=1715212800&v=beta&t=UsUc9a5pH31MIdp-Y7WPp-3UzJMCl7vpGiZB-UntC_8"
                  alt=""
                />
              </h2>
              <h2 className="about_maina">
                <FaCalendarAlt /> 2022
              </h2>
            </div>

            <p className="about_maina_para">
              Dive into the fundamental principles of front-end development with
              our comprehensive course. Learn essential concepts such as HTML,
              CSS, and JavaScript, and gain hands-on experience building
              interactive and responsive web interfaces. Start your journey
              towards becoming a proficient front-end developer today!
            </p>
          </div>
          {/* fourth */}
          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">
                <a
                  className="linka"
                  href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMDA0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfMzU5OTY4OV8xNjU3NzAzOTk5LnBuZyIsInVzZXJuYW1lIjoiRGlsZWVzaGEgTmF3YXJhdGhuYSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4612%2FGetting-Started-with-ReactJS-Components%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1283126875190224610&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz%2FX1zavMMsyMLEoCAKQMrzYlAAAA"
                >
                  Exploring ReactJS Components |
                </a>
                <img
                  loading="lazy"
                  style={{ width: "10px", height: "10px", borderRadius: "50%" }}

                  src="https://media.licdn.com/dms/image/C510BAQEvNU0EYy6wUw/company-logo_100_100/0/1631319527790?e=1715212800&v=beta&t=CgeYCVjWiAZqe6FCl7HnEMNDrn0btkK_q0ieVE6jqTs"
                  alt=""
                />
              </h2>
              <h2 className="about_maina">
                <FaCalendarAlt /> 2022
              </h2>
            </div>

            <p className="about_maina_para">
              Dive into the world of React.js with our comprehensive course on
              getting started with ReactJS components. Learn how to build
              interactive user interfaces using React components, understand the
              core concepts of React.js, and master the skills needed to create
              dynamic and efficient web applications
            </p>
          </div>{" "}


          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">Human Centered Design with Human interact</h2>
              <h2 className="about_maina">View Github</h2>
            </div>

            <p className="about_maina_para">
              This is an intensive, hands-on learning experience that will
              challenge you to get out of your chair and out into the real world
              to talk to people and test your ideas. You’ll leave this
              experience equipped and energized to apply the human-centered
              design process to challenges across industries, sectors, and
              geographies to generate breakthrough ideas.
            </p>
          </div>
          <div className="about_card_detail">
            <div className="fp">
              <h2 className="about_maina">Learning Something Great 😉</h2>
              <h2 className="about_maina">
                <FaCalendarAlt /> Currently
              </h2>
            </div>

            <p className="about_maina_para">We continue learning everyday.</p>
          </div>
        </div>
        <h2 className="abo">Let's connect</h2>

        <p className="about_maina_para mos">
          I'm excited to connect with others via
          {/* background-color: #; */}
          <a
            className="linka"
            style={{
              color: "#d85040",
              textDecoration: "underline",
              margin: "0px 5px",
            }}
            // color={#d85040}
            href="
          mailto:hello@dileeshanawarathna.me
          "
          >
            email (hello@dileeshanawarathna.me)
          </a>
          or Twitter, I'm eager to chat about projects and ideas. Right now, I'm
          diving into freelance work, so I'm totally open to hearing about any
          potential opportunities you might have in mind. Let's discuss them
          together and see if there's a chance for us to collaborate if it feels
          like a good fit! Can't wait to hear from you.
        </p>
        {/* <Languages/> */}
        <Faq />
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./faq.css";
import "atropos/css";
import Atropos from "atropos/react";
export default function Faq() {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const handler = () => {
    setOne(!one);
    setTwo(false);
    setThird(false);
    setFourth(false);
  };

  const handlerv2 = () => {
    setOne(false);
    setTwo(!two);
    setThird(false);
    setFourth(false);
  };

  const handlerv3 = () => {
    setOne(false);
    setTwo(false);
    setThird(!third);
    setFourth(false);
  };
  const handlerv4 = () => {
    setOne(false);
    setTwo(false);
    setThird(false);
    setFourth(!fourth);
  };

  return (
    <div className="faq_container">
      <div className="servicer12">
        <img loading="lazy" src="https://i.imgur.com/Lu5akzc.png" alt="" />
      </div>
      <h2 className="skill_title">Frequently Asked Questions</h2>
      <p className="skills_para mm">
        If your question isn't
        <span className="mooha" style={{ fontWeight: "700" }}>
          addressed here,
        </span>
        feel free to reach out—I'm always ready to provide further assistance
      </p>

      <div className="faq_grid">
        <div className="faq_sub_grid maq">
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
            <div className="left_card_faq">
              <div className="shadower">
                <img src="https://i.imgur.com/lE90YCX.png" alt="" />
              </div>

              <div className="left_card_img">
                <img src="https://i.imgur.com/sb9KlDX.png" alt="" />
              </div>
              <div className="card_details_faq">
                <h1 className="faq_card_title">Ask A Question</h1>
                <p className="faq_para">
                  Here's what some of my satisfied clients have to say about my
                  work
                </p>
                <div className="faq_btn_section">
                  <button className="faq_btn">Ask a Question</button>
                </div>
              </div>
            </div>
        </Atropos>
          </div>
        <div className="faq_sub_grid jkob">
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">What services do you offer?</h2>
              <div className="faq_me" onClick={handler}>
                {one ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {one && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  Answer: I provide a range of web development services,
                  including front-end and back-end development, responsive
                  design, e-commerce solutions, CMS, and custom web
                  applications.
                </p>
              </>
            )}
          </div>
          {/* ...........................................................second...................................................... */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                How do you approach web development?
              </h2>
              <div className="faq_me" onClick={handlerv2}>
                {two ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {two && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  Answer: I start by understanding your needs. My process
                  involves using the latest technologies, following best
                  practices, and creating user-friendly, visually appealing
                  websites from concept to implementation.
                </p>
              </>
            )}
          </div>
          {/* ...........................................................third...................................................... */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">
                Do you offer maintenance and support?
              </h2>
              <div className="faq_me" onClick={handlerv3}>
                {third ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {third && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  Answer: Yes, I offer ongoing maintenance and support to keep
                  your website secure, up-to-date, and performing well. This
                  includes bug fixes, content updates, and implementing new
                  features.
                </p>
              </>
            )}
          </div>

          {/* ...........................................................fourth...................................................... */}
          <div className="faq_list_card">
            <div className="list_card_top_title">
              <h2 className="faq_reason">How long does a project take?</h2>
              <div className="faq_me" onClick={handlerv4}>
                {fourth ? (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/il6uzHS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://i.imgur.com/DEr97dS.png"
                      loading="lazy"
                      alt=""
                    />
                  </>
                )}
              </div>
            </div>

            {fourth && (
              <>
                <div className="fg"></div>
                <p className="faq_reason_ans">
                  Answer: Timelines vary based on project complexity. Small
                  projects may take a few weeks, while larger ones could span
                  months. Clear communication and collaboration help us meet
                  project deadlines effectively.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

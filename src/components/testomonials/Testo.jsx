import React, { useState } from "react";
import "./testo.css";

export default function Testo({ id }) {
  const [expandedParagraphs, setExpandedParagraphs] = useState([]);

  const toggleReadMore = (index) => {
    setExpandedParagraphs((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const clients = [
    {
      name: "mavindu",
      country: "Sri Lanka",
      image: "https://i.imgur.com/3tgACIw.jpeg",
      feedback:
        "The seller maintained excellent communication throughout the process, promptly addressing any inquiries I had. The product I ordered arrived on time and exceeded my expectations in terms of quality. I highly recommend this online seller to anyone looking for a reliable and trustworthy source for their shopping needs.",
    },
    {
      name: "danielmami",
      country: "United States",
      image: "https://i.imgur.com/WLUIihs.jpeg",
      feedback:
        "I had a great experience working with Dileesha. He created a stunning portfolio website for me that truly highlights some of my academic work and achievements. He was also committed to delivering a high-quality product and ensuring my satisfaction throughout the process and always communicate promptly. The final result exceeded my expectations. I highly recommend Dileesha to anyone in need of a professional, academic, and impressive website. Peace!",
    },
  ];

  return (
    <div className="testo_container" >
      <div className="servicer11">
        <img loading="lazy" src="https://i.imgur.com/daKrFWE.png" alt="" />
      </div>
      <h2 className="skill_title">Trusted by the kindest clients</h2>
      <p className="skills_para mm">
        Explore a selection of my
        <span className="mooha" style={{ fontWeight: "700" }}>
          Our clients' feedback
        </span>
        speaks volumes about our commitment to excellence. Read what they have
        to say about their experiences working with us.
      </p>

      <div className="testo_card_grid" id={id}>
        {clients.map((client, index) => (
          <div className="testo_card" key={index}>
            <div className="testas">
              <div className="testo_img">
                <img src={client.image} alt="" />
                <div className="testa"></div>
              </div>
              <div className="persona">
                <h1 className="name_client">{client.name}</h1>
                <p className="addr">{client.country}</p>
              </div>
            </div>

            <p className="client_para">
              {expandedParagraphs[index]
                ? client.feedback
                : `${client.feedback.slice(0, 200)}...`}
              <span
                className="read-more"
                style={{ cursor: "pointer" }}
                onClick={() => toggleReadMore(index)}
              >
                {expandedParagraphs[index] ? " Read Less" : " Read More"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

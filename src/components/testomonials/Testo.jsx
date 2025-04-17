import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
      name: "Paul",
      country: "United States",
      image: "https://i.imgur.com/bKvA7IB.jpeg",
      feedback:
        "Quick reply, professional, and flexible with our requests. What a wonderful job in such a short time. Thank you, Dileesha!",
    },

     {
      name: "Natalia",
      country: "UK",
      image: "https://i.imgur.com/Pzu9WK5.jpeg",
      feedback:
        "Thank you very much for the great work. I am very pleased with the results. It was a pleasure to work with you. My website looks good and professional.I highly recommend to work with this frrelancer.Create ob, well done!!!",
    },
  {
      name: "Shanequejhonson",
     country: "United States",
      image: "https://i.imgur.com/TADwLn8.jpeg",
      feedback:
        "Dileesha was very professional and creative. Attention to detail was very good as well.I love my website",
    },

     {
      name: "eliteService",
     country: "France",
      image: "https://i.imgur.com/ZNcqhQm.jpeg",
      feedback:
        "bon travail",
    },
    {
      name: "Shanthala",
      country: "Germany",
      image: "https://i.imgur.com/Y1YvYVT.jpeg",
      feedback:
        "We are delighted with the work Dileesha did on our wedding website. The communication was outstanding, and he fulfilled all our wishes with great attention to detail. We highly recommend him to anyone looking for professional and reliable service.",
    },
    
    {
      name: "danielmami",
      country: "United States",
      image: "https://i.imgur.com/WLUIihs.jpeg",
      feedback:
        "I had a great experience working with Dileesha. He created a stunning portfolio website for me that truly highlights some of my academic work and achievements. He was also committed to delivering a high-quality product and ensuring my satisfaction throughout the process and always communicate promptly. The final result exceeded my expectations. I highly recommend Dileesha to anyone in need of a professional, academic, and impressive website. Peace!",
    },
    {
      name: "Andrea",
      country: "Spain",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d62c407b1ef9928f576ee8914631e55d-1396083891678225555434/JPEG_20230307_224554_7723637341118281996.jpg",
      feedback:
        "Thanks a lot for you beautiful website! I am very happy with the result, i highly recommend!",
    },
    {
      name: "jrnetworks",
      country: "Philippines",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/78055fcecaecf2a4be7a2ca0a34c9f43-1546498742014/8de26909-dca7-4f69-a83a-bdc518168ed9.jpg",
      feedback:
        "highly professional and responsive to all my request. Will order in in my future projects.",
    },
  {
      name: "mavindu",
      country: "Sri Lanka",
      image: "https://i.imgur.com/3tgACIw.jpeg",
      feedback:
        "The seller maintained excellent communication throughout the process, promptly addressing any inquiries I had. The product I ordered arrived on time and exceeded my expectations in terms of quality. I highly recommend this online seller to anyone looking for a reliable and trustworthy source for their shopping needs.",
    },
    
  ];

  return (
    <div className="testo_container" id={id}>
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

      <Swiper
  modules={[Navigation]}
  spaceBetween={18}
  slidesPerView={1} // Default to 1
  navigation={{
    prevEl: ".prev-arrow",
    nextEl: ".next-arrow",
  }}
  breakpoints={{

    488: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  }}
>


        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testo_card">
              <div className="testas">
                <div className="testo_img">
                  <img src={client.image} alt={client.name} />
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
                  : `${client.feedback.slice(0, 120)}...`}
                <span
                  className="read-more"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedParagraphs[index] ? " Read Less" : " Read More"}
                </span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="mala">
        <button className="prev-arrow">
          <img src="https://i.imgur.com/vcwnvm2.png" alt="Previous" />
        </button>
        <button className="next-arrow">
          <img src="https://i.imgur.com/D91GDib.png" alt="Next" />
        </button>
      </div>
    </div>
  );
}

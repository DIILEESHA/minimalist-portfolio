/* eslint-disable react/prop-types */
import "./portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sanity from "../../sanity/Sanity.jsx";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ThreeDots } from "react-loader-spinner";
import Single from "../../pages/single/Single.jsx";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSingle, setShowSingle] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowSingle(true);
  };

  const handleclose = () => {
    setShowSingle(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchQuery = `*[_type == "portfolio"]
          {
            title,
            type,
            slug,
            description,
            logo{asset->{_id,url}},
            mainimage{asset->{_id,url}},
            publishDate,
            images[]{asset->{_id,url}},
            websiteUrl,
            gitUrl
          
          }`;

        const res = await sanity.fetch(fetchQuery);

        setPortfolio(res);
        setLoading(false);
        // setLoader(false)
        // console.log("data:", res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Define custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button
      className="prev-arrow customer"
      onClick={onClick}
      disabled={currentSlide === 0}
    >
      <img src="https://i.imgur.com/vcwnvm2.png" alt="" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="next-arrow customer"
      onClick={onClick}
      disabled={currentSlide === portfolio.length - 1}
    >
      <img src="https://i.imgur.com/D91GDib.png" alt="" />
    </button>
  );

  const handleCardClick = (index) => {
    setHoveredIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "sliders",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="portfolio_container">
      <div className="servicer11">
        <img loading="lazy" src="https://i.imgur.com/wOJE8Zi.png" alt="" />
      </div>
      <h2 className="skill_title">My Work Showcase</h2>
      <p className="skills_para mm">
        Explore a selection of my
        <span className="mooha" style={{ fontWeight: "700" }}>
          projects
        </span>
        , showcasing the creative and functional solutions I provide. Each
        project represents a unique challenge and a successful outcome.
      </p>

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#fff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="portfolio_card_grid">
          <Slider {...settings}>
            {portfolio.map((port, index) => (
              <div
                className={`portfolio_sm_card ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
          
                  onClick={() => handleProjectClick(port)
                }
              >
                <img className="po" src={port?.mainimage?.asset.url} alt="" />
                <div className="circle"></div>
                <div className="cicler_imger">
                  <img className="nima" src={port?.logo?.asset.url} alt="" />
                </div>
                <div className="card-title">
                  <p className="dater">
                    {format(new Date(port?.publishDate), "MMMM , yyyy")}
                  </p>
                  <h2 className="card-title1 mooha">{port?.title}</h2>
                  <h3 className="web">{port?.type}</h3>
                </div>
                {/* <div>

              <h2 className="port_title">{port?.title}</h2>
            </div> */}
              </div>
            ))}
          </Slider>
        </div>
      )}
       {showSingle && (
          <Single project={selectedProject} onclose={handleclose} />
        )}
      <div className="dk"></div>
      <div className="slider_arrows">
        <div className="slio">
          <span className="slider-counter">
            {`${currentSlide + 1}/${portfolio.length}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

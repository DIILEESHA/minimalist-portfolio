/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Template from "../../components/Template";
import "./project.css";
import { FaArrowRight } from "react-icons/fa";
import Sanity from "../../sanity/Sanity";
import { ThreeDots } from "react-loader-spinner";

export default function Project() {
  const [fetch, setFetch] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchQuery = `*[_type == "portfolio"]
        {
          title,
          type,
          slug,
          description,
          logoweb{asset->{_id,url}},
          mainimage{asset->{_id,url}},
          publishDate,
        }`;

        const res = await Sanity.fetch(fetchQuery);
        setFetch(res);
        console.log(res);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Template
      // scrollToGuestMessages={scrollToGuestMessages}
      guestBookDetails={{
        title: "My Creative  ",
        subtitle: "Portfolios",
        description: "Explore a showcase of my diverse projects and creations",
        arrowSrc: "https://i.imgur.com/EzZ16Wn.png",
        message: "Step into My World of Creativity!",
      }}
    >
      <div className="template_container">
        <div className="template_img">
          <img src="https://i.imgur.com/6xeQSQS.png" alt="" />
        </div>
        <h2 className="project_title">Nice stuff I've built</h2>
        {/* <h2 className="project_title">Nice stuff I've built</h2> */}

        <div className="project_top_area">
          <p className="fear">
            Strategic, meaningful, and impactful work for bold, forward-thinking
            brands as a one-man band and team player.
          </p>
        </div>

        {loader ? (
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
          <div className="projectso_grid">
            {fetch.map((datas, index) => (
              <div key={index} className="projects_sub_grid">
                <div className="maon">
                  <div className="circler_imger">
                    <img
                      loading="lazy"
                      className="nimas"
                      src={datas?.logoweb?.asset?.url}
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="project_titleone">{datas?.title}</h2>
                <div className="project_description">
                  <p className="project_description_para">
                    {datas?.description}
                  </p>
                </div>

                <div className="arrow_section">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Template>
  );
}

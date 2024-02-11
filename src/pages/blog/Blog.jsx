/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./blog.css";
import Template from "../../components/Template";
import Sanity from "../../sanity/Sanity";
import { ThreeDots } from "react-loader-spinner";
import { FaArrowRight } from "react-icons/fa6";
import { PortableText } from "@portabletext/react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("latest");
  const [blog, setBlog] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        let fetchQuery =
          '*[_type == "blog"]{blogImage{asset->{_id,url}}, title, date, category, body}';

        if (selectedCategory !== "latest") {
          fetchQuery = `*[_type == "blog" && category == "${selectedCategory}"]{blogImage{asset->{_id,url}}, title, date, category, body}`;
        }

        const res = await Sanity.fetch(fetchQuery);

        setBlog(res);
        console.log(res)
        setLoad(false);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchBlog();
  }, [selectedCategory]);

  return (
    <Template
      guestBookDetails={{
        title: "My ",
        subtitle: "Blog🧑🏻",
        description:
          "Join me on an illuminating journey through our thought-provoking articles. From insightful tech discussions to creative design inspirations, and everything in between, let's explore, learn, and grow together!",
        arrowSrc: "https://i.imgur.com/EzZ16Wn.png",
        message: "Crafting Content with Igniting Minds",
      }}
    >
      <div className="bloger">
        <div className="template_img">
          <img src="https://i.imgur.com/6xeQSQS.png" alt="" />
        </div>

        <h2 className="project_title">Illuminate Your Mind</h2>
        <div className="project_top_area">
          <p className="fear">
            Embark on a journey of discovery with articles. Dive into topics
            ranging from technology and design to personal growth and beyond.
          </p>
        </div>

        {/* navigation */}
        <div className="blog_ul_area">
          <ul className="blog_ul">
            <li
              className={
                selectedCategory === "latest" ? "blog__li activer" : "blog__li"
              }
              onClick={() => setSelectedCategory("latest")}
            >
              latest
            </li>
            <li
              className={
                selectedCategory === "coding" ? "blog__li activer" : "blog__li"
              }
              onClick={() => setSelectedCategory("coding")}
            >
              coding
            </li>
            <li
              className={
                selectedCategory === "design" ? "blog__li activer" : "blog__li"
              }
              onClick={() => setSelectedCategory("design")}
            >
              design
            </li>
            <li
              className={
                selectedCategory === "tutorials"
                  ? "blog__li activer"
                  : "blog__li"
              }
              onClick={() => setSelectedCategory("tutorials")}
            >
              tutorials
            </li>
          </ul>
          <div className="blog_line"></div>
        </div>

        {/* blogcard */}

        {load ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#fff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            /> */}

            <div style={{ height: "40vh", margin: "50px 0" }}>
              <h1 style={{ fontSize: "22px", fontWeight: "500" }}>
                Stay tuned for insightful articles❤️
              </h1>
            </div>
          </div>
        ) : (
          <div className="bloger_card_section">
            {blog?.map((article, index) => (
              <article key={index} className="single_blog_card">
                <div className="blog_card_img_section">
                  <img
                    src={article?.blogImage?.asset?.url}
                    alt={article?.title}
                    className="blog__img"
                  />
                </div>

                <section className="blog__card_article">
                  <div className="one__line">
                    <h2 className="blog__create__date">— {article?.date} </h2>
                    <h3 className="blog__create__date">3 min read</h3>
                  </div>

                  <h1 className="blogger__title">{article?.title}</h1>

                  <p className="blog_short__para">
                    <PortableText value={article?.body} />
                  </p>
                </section>

                <div className="article__go__arrow">
                  <div className="arrowme">
                    <FaArrowRight style={{ cursor: "pointer" }} />
                  </div>
                </div>
              </article>
            ))}
            <div className="artcle__bottom__line"></div>
          </div>
        )}
      </div>
    </Template>
  );
}

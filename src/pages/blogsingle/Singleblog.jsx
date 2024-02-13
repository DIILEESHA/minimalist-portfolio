/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./singleblog.css";
import SingleTemplate from "./SingleTemplate";
import { Link, useParams } from "react-router-dom";
import Sanity from "../../sanity/Sanity";
import { IoIosArrowBack } from "react-icons/io";
import { PortableText } from "@portabletext/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "./serializers";
import { ThreeDots } from "react-loader-spinner";
import ShareButtons from "../../buttons/ShareButtons";

export default function Singleblog() {
  const [single, setSingle] = useState(null);
  const { slug } = useParams();
  const [load, setLoad] = useState(true);
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const singleQuery = `*[_type == "blog" && slug.current == "${slug}"]
        {
        blogImage{asset->{_id,url}},
        title,
        date,
        category,
        body,
        slug
        }`;

        const res = await Sanity.fetch(singleQuery);
        setSingle(res);
        setLoad(false);
        console.log("query resukt:", res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingle();
  }, [slug]);

  useEffect(() => {
    const currentUrl = `https://www.dileeshanawarathna.me/blog/${slug}`;
    setBlogUrl(currentUrl);
  }, [slug]);

  return (
    <SingleTemplate>
      {load ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
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
        <div className="single__blog__template">
          {single &&
            single?.map((singa, index) => (
              <div key={index}>
                <div className="blog__era">
                  <Link to="/blog">
                    <div className="close__btn__sec">
                      <IoIosArrowBack />
                    </div>
                  </Link>
                  <div className="single__top__imgers">
                    <img
                      src={singa?.blogImage?.asset?.url}
                      alt=""
                      className="sing__top__img"
                    />
                  </div>
                </div>

                <div className="blog__timelaps__option">
                  <h2 className="blog__create__date">—{singa?.date} </h2>
                  <h3 className="blog__create__date">3 min read</h3>
                </div>

                {/* <p className="khan"> */}
                {/* <PortableText value={singa?.body} /> */}
                <BlockContent
                  projectId="hl7l7rdy"
                  imageOptions={{ w: 420, h: 340, fit: "max" }}
                  dataset="production"
                  blocks={singa?.body}
                  serializers={serializers}
                />
                {/* {singa?.body} */}

                {/* </p> */}

                <div className="share-option">
                  <h1 className="share">Share this post</h1>
                  <ShareButtons
                    url={`your-blog-url/${singa.slug.current}`}
                    title={singa.title}
                  />
                </div>
              </div>
            ))}
        </div>
      )}
    </SingleTemplate>
  );
}

/* eslint-disable no-unused-vars */
<<<<<<< HEAD
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

export default function Singleblog() {
  const [single, setSingle] = useState(null);
  const { slug } = useParams();
  const [load, setLoad] = useState(true);

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
        console.log("query resukt:", res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingle();
  }, [slug]);

  return (
    <SingleTemplate>
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
            </div>
          ))}
      </div>
    </SingleTemplate>
  );
=======
import React from "react";
import "./singleblog.css";
import Template from "../../components/Template";

export default function Singleblog() {
  return <Template>f</Template>;
>>>>>>> 40306eba221d8a30bb5a2d4055f6b6da90ac6128
}

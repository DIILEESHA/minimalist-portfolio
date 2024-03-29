import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactPlayer from "react-player";
import { ThreeDots } from "react-loader-spinner";

// Serializer for different block types
const serializers = {
  // const[load,setLoad] =useState()
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case "h1":
          return (
            <h1 style={{ margin: "10px 0", color: "#e4e4e6" }}>
              {children}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "#222",
                  margin: "5px 0",
                }}
              />
            </h1>
          );
        case "h2":
          return (
            <h2 style={{ margin: "0px 0", fontSize: "20px" }}>
              {children}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "#222",
                  margin: "5px 0",
                }}
              />
            </h2>
          );
        case "h3":
          return (
            <h3 style={{ margin: "0px 0", fontSize: "16px" }}>{children}</h3>
          );
        case "h4":
          return <h4>{children}</h4>;
        case "blockquote":
          return <blockquote>{children}</blockquote>;
        case "ul":
          return <ul style={{ marginLeft: "20px" }}>{children}</ul>;
        case "li":
          return (
            <li style={{ marginBottom: "10px", opacity: ".8" }}>{children}</li>
          );
        default:
          return (
            <p
              style={{
                margin: "10px 0",
                lineHeight: "190%",
                // color: "#fff",
                opacity: ".8",
                fontWeight: "500",
              }}
            >
              {children}
            </p>
          );
      }
    },
    image: ({ node }) => (
      <img src={node.asset.url} alt={node.alt} style={{ maxWidth: "100%" }} />
    ),
    code: ({ node }) => (
      <div style={{ overflowX: "auto" }}>
        <SyntaxHighlighter
          language={node.language || ""}
          style={{ ...prism, backgroundColor: "#0000", maxWidth: "100%" }}
        >
          {node.code}
        </SyntaxHighlighter>
      </div>
    ),
    
    

    youtube: ({ node }) => {
      const { url } = node;
      const [load, setLoad] = useState(true);

      const handleLoad = () => {
        setLoad(false);
      };

      return (
        <div
          style={{
            margin: "20px auto",
          }}
        >
          {load && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // position:"absolute",
                // inset:"0"
              }}
            >
              <ThreeDots color="#fff" />
            </div>
          )}
          <ReactPlayer
            url={url}
            width="100%"
            // height="100%"
            controls
            onReady={handleLoad}
            // onError={handleError}
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ mark, children }) => {
      // If the mark has an href, use it, otherwise default to #
      const href = mark.href || "#";
      return (
        <a href={href} style={{ color: "#d85040" }}>
          {children}
        </a>
      );
    },
  },
};

export default serializers;

/* eslint-disable no-unused-vars */
import React from "react";

const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;
      switch (style) {
        case "h1":
          return (
            <h1 style={{ margin: "10px 0", color: "#e4e4e6" }}>
              {props.children}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "#111",
                  margin: "5px 0",
                }}
              ></div>
            </h1>
          );
        case "h2":
          return <h2 style={{ margin: "0px 0" }}>{props.children}</h2>;
        case "h3":
          return <h3 style={{ margin: "0px 0" }}>{props.children}</h3>;
        case "blockquote":
          return <blockquote>{props.children}</blockquote>;
        case "code": // Handle code blocks
          const { language, code } = props.node;
          return (
            <pre style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
              <code className={`language-${language}`}>{code}</code>
            </pre>
          );
        default:
          return (
            <p
              style={{
                margin: "10px 0",
                lineHeight: "190%",
                color: "#fff",
                opacity:".7",
                fontWeight: "500",
              }}
            >
              {props.children}
            </p>
          );
      }
    },
    listItem: (props) => {
      return (
        <li style={{ margin: "20px", color: "#333" }}>{props.children}</li>
      );
    },
    bulletList: (props) => {
      return (
        <ul style={{ margin: "20px 0", color: "#333" }}>{props.children}</ul>
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

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
                  background: "#222",
                  margin: "5px 0",
                }}
              ></div>
            </h1>
          );
        case "h2":
          return (
            <h2 style={{ margin: "0px 0", fontSize: "20px" }}>
              {props.children}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "#222",
                  margin: "5px 0",
                }}
              ></div>
            </h2>
          );
        case "h3":
          return (
            <h3 style={{ margin: "0px 0", fontSize: "16px" }}>
              {props.children}
            </h3>
          );
        case "blockquote":
          return <blockquote>{props.children}</blockquote>;
        case "code":
          return (
            <pre style={{ backgroundColor: "red", padding: "10px" }}>
              <code>{props.children}</code>
            </pre>
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
              {props.children}
            </p>
          );
      }
    },
    image: (props) => {
      return (
        <img
          src={props.node.asset.url}
          alt={props.node.alt}
          style={{ maxWidth: "100%" }}
        />
      );
    },
    codeWithBgColor: (props) => {
      const { code, backgroundColor } = props.node;
      return (
        <pre
          style={{
            backgroundColor: backgroundColor,
            padding: "10px",
            position: "relative",
          }}
        >
          <code>{code}</code>
        </pre>
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

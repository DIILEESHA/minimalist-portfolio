/* eslint-disable no-unused-vars */
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaReddit } from "react-icons/fa";
import "./button.css";

const ShareButtons = ({ url, title }) => {
  // Function to open share dialog for Twitter
  const shareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, "_blank");
  };

  // Function to open share dialog for Facebook
  const shareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(title)}`;
    window.open(facebookUrl, "_blank");
  };

  // Function to open share dialog for LinkedIn
  const shareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`;
    window.open(linkedInUrl, "_blank");
  };

  // Function to open share dialog for Reddit
  const shareReddit = () => {
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`;
    window.open(redditUrl, "_blank");
  };

  return (
    <div className="share-buttons">
      <button onClick={shareTwitter}>
        <FaTwitter />
      </button>
      <button onClick={shareFacebook}>
        <FaFacebook />
      </button>
      <button onClick={shareLinkedIn}>
        <FaLinkedin />
      </button>
      <button onClick={shareReddit}>
        <FaReddit />
      </button>
    </div>
  );
};

export default ShareButtons;

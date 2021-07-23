import React from "react";

// import { Link } from "react-router-dom";

const SocialMediaIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://m.facebook.com/techfestsliet/" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://instagram.com/techfestsliet_" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/company/techfest-sliet" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      {/* <a href="https://www.linkedin.com/company/techfest-sliet" target="_blank" rel="noreferrer">
        <i className="fab fa-youtube"></i>
      </a> */}
      <a href="https://twitter.com/techfestsliet" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;

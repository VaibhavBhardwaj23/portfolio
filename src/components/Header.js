import React from "react";
import "./Header.css";
const Header = ({ title, src }) => {
  return (
    <div className="header_projects">
      <div className="header_title">
        <h1>{title}</h1>
      </div>
      <div className="image_boy">
        <img src={src} alt="projects_kid" />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./sections.css";
import projects_kid from "../assets/success-kid.svg";
import List from "../components/List";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="header_projects">
        <h1>What i made</h1>
        <div className="image_boy">
          <img src={projects_kid} alt="projects_kid" />
        </div>
      </div>
      <List />
    </div>
  );
};

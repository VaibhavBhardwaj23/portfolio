import React from "react";
import "./sections.css";
import List from "../components/List";
import Header from "../components/Header";
import projects_kid from "../assets/success-kid.svg";
import { ProjectsData } from "../ProjectsData";
export const Projects = () => {
  console.log(ProjectsData);
  return (
    <div className="projects">
      <Header title="What I Made" src={projects_kid} />
      {ProjectsData &&
        ProjectsData.map((project) => (
          <List key={project.title} project={project} />
        ))}
    </div>
  );
};

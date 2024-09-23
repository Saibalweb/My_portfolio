import React from "react";
import "./Project.css";
import ProjectCard from "./UI/ProjectCard";

const Project = () => {
  return (
    <div id="project">
      <h1 className="projectHeading">Projects</h1>
      <ProjectCard/>
      <ProjectCard/>
      <h3 className="moreProj"><a href="">More Projects</a></h3>
    </div>
  );
};

export default Project;

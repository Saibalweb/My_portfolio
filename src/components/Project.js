import React from "react";
import "./Project.css";
import ProjectCard from "./UI/ProjectCard";
import { projects } from "../Constants/projects";

const Project = () => {
  return (
    <div id="project">
      <h1 className="projectHeading">Projects</h1>
      {projects.map((item) => (
        <ProjectCard
          key={item.id}
          id={item.id}
          name={item.name}
          subHeading={item.subHeading}
          description={item.description}
          image={item.image}
          link={item.link}
          techStack={item.techStack}
        />
      ))}
      {/* <h3 className="moreProj"><a href="">More Projects</a></h3> */}
    </div>
  );
};

export default Project;

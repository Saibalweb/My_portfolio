import React from "react";
import './GithubBtn.css'
import icons from "../../assets/icons";
const GithubBtn = ({ text, link }) => {
  return (
    <a href={link} target="_blank" className="githubLinkBtn">
      <img src={icons.github} alt="github-icon" />
      <span>{text|| "Github" }</span>
    </a>
  );
};

export default GithubBtn;

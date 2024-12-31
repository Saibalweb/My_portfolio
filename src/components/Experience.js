import React from "react";
import "./Experience.css";
import icons from "../assets/icons";
import ProjectTechChip from "./UI/ProjectTechChip";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="expHeader">Experience</h1>
      <div className="expContainer">
        <div className="expCard">
          <div className="expTitle">
            <img src={icons.work} className="expLogo" alt="exp-logo" />
            <div>
              <h2>Trigital Technologies Pvt Ltd</h2>
              <h3>FrontEnd Developer Intern</h3>
            </div>
          </div>
          <div className="expDuration">
              <div className="expDate">November 2023-Aug 2024</div>
              <div className="expLoc">Remote</div>
          </div>
        </div>
        <div className="expDetails">
          <ul>
            <li>&bull; Developed and maintained production mobile applications, including CashMe, Calonex, and eParisheva. </li>
            <li>&bull; Created responsive, user-friendly UIs with React Native, ensuring seamless cross-platform
            functionality.</li>
            <li>&bull; Integrated APIs and handled data binding to enhance app functionality and performance. </li>
            <li>&bull;Implemented OAuth for secure user authentication and authorization.</li>
            <li>&bull; Added deep linking capabilities for improved app navigation and user experience.</li>
            <li>&bull; Collaborated with cross-functional teams to troubleshoot and resolve bugs in production apps.</li>
            <li>&bull; Optimized app performance and ensured compatibility with multiple Android/iOS devices.</li>
          </ul> 
        </div>
      </div>
    </div>
  );
};

export default Experience;

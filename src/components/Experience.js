import React from "react";
import "./Experience.css";
import icons from "../assets/icons";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="expHeader">Experience</h1>
      <div className="expContainer">
        <div className="expCard">
          <div className="expTitle">
            <img src={icons.work} className="expLogo" />
            <div>
              <h2>Trigital Technologies Pvt Ltd</h2>
              <h3>FrontEnd Developer Intern</h3>
            </div>
          </div>
          <div className="expDuration">
              <div className="expDate">November 2023-July 2024</div>
              <div className="expLoc">Remote</div>
          </div>
        </div>
        <div className="expDetails">
          <ul>
            <li>&bull; Worked in Front end team for developing CashMe- a payment solution app mainly developing for Nigeria . </li>
            <li>&bull; Created many UI of this app with ReactJs and React Native. </li>
            <li>&bull; Worked with Wix navigation (react native navigation) library for the navigation and work flow of the app . </li>
            <li>&bull; Got experience with Api Binding for dynamic implementation</li>
            <li>&bull; Had some work and knowledge with Redux and react-native-async-storage for state management</li>
            <li>&bull; </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

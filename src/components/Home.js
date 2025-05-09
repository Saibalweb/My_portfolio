import React, { useState } from "react";
import "./Home.css";
import Btn from "./UI/Btn";
import SocialList from "./SocialList";
const Home = () => {
  const [isMobile] = useState(window.innerWidth < 850);
  const handleHireMe = () => {
    const email = "saibalkole@gmail.com"; // Your email address
    const subject = "Job Opportunity"; // Subject of the email
    const body = `Hi, I came across your portfolio and would like to discuss a job opportunity with you.`; // Body of the email
    if (isMobile) {
      if (navigator.vibrate) {
        navigator.vibrate(100);
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
      }
    }else{
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
      );
    }
  };
  const openPdf = () => {
    const resumeUrl = "/assets/Saibal_Kole_Resume_May10.pdf";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="home">
        <div className="headingContainer">
          <p>Hey There.. Welcome!</p>
          <div className="heading">
            I am <span className="headin-name">Saibal Kole</span>
          </div>
          <div>
            I’m a dedicated full-stack developer with expertise in React JS,
            React Native, and backend technologies like Express, MongoDB, SQL,
            and Docker. I specialize in creating seamless web and mobile
            experiences, from crafting intuitive front-end interfaces to
            designing robust and scalable back-end architectures.
          </div>
          <SocialList />
          <div className="BtnContainer">
            <Btn text="Hire Me" onClick={handleHireMe} />
            <Btn text={"Resume"} onClick={openPdf} />
          </div>
        </div>
        <div className="imageContainer">
          <img
            src="/assets/saibal_portrait.webp"
            className="profileImg"
            alt="Profile-img"
            title="saibal-kole"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

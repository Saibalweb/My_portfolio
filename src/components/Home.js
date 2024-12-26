import React from "react";
import "./Home.css";
import Btn from "./UI/Btn";
import myPic from "../assets/saibal_mask_blue_new.png";
import SocialList from "./SocialList";
const Home = () => {
  const handleHireMe = () => {
    // const email = "saibalkole@gmail.com"; // Your email address
    // const subject = "Job Opportunity"; // Subject of the email
    // const body = `Hi, I came across your portfolio and would like to discuss a job opportunity with you.`; // Body of the email
    // window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=saibalkole@gmail.com&su=Job Opportunity&body=Hi, I came across your portfolio...`
    );
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
            React Native, and backend technologies like Express, MongoDB, SQL, and
            Docker. I specialize in creating seamless web and mobile
            experiences, from crafting intuitive front-end interfaces to
            designing robust and scalable back-end architectures.
          </div>
          <SocialList />
          <div className="BtnContainer">
            <Btn text="Hire Me" onClick={handleHireMe} />
            <Btn text={"Resume"} />
          </div>
        </div>
        <div className="imageContainer">
          <img
            src={myPic}
            className="profileImg"
            alt="Profile-img"
            title="item"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

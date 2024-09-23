import React from "react";
import "./Home.css";
import Btn from "./UI/Btn";
import myPic from "../assets/saibal.png";
const Home = () => {
  const handleHireMe = () => {
    // const email = "saibalkole@gmail.com"; // Your email address
    // const subject = "Job Opportunity"; // Subject of the email
    // const body = `Hi, I came across your portfolio and would like to discuss a job opportunity with you.`; // Body of the email
    // window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;
    if(navigator.vibrate){
      navigator.vibrate(100);
    }
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=saibalkole@gmail.com&su=Job Opportunity&body=Hi, I came across your portfolio...`);

  };
  return (
    <>
      <div className="home">
        <div className="headingContainer">
          <p>Lorem ipsum dolor sit.</p>
          <div className="heading">
            I am <span className="headin-name">Saibal Kole</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            tempora, minima nisi vero assumenda pariatur atque aliquam ad nulla
            aliquid.A Full Stack Developer who loves to build things with code
            and design.
          </div>
          <div className="BtnContainer">
            <Btn text="Hire Me" onClick={handleHireMe} />
            <Btn text={"Download Cv"} />
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

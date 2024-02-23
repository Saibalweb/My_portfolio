import React from "react";
import "./Home.css";
import Btn from "./UI/Btn";
import myPic from "../assets/saibal.png";
const Home = () => {
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
            <Btn text="Contact Me" />
            <Btn text={"Download Cv"} />
          </div>
        </div>
        <div className="imageContainer">
          <img src={myPic} className="profileImg" alt="Profile-img" title="item" />
        </div>
      </div>
    </>
  );
};

export default Home;

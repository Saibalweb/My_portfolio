import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import SkillCard from "./UI/SkillCard";
import icons from "../assets/icons";
import DetailsCard from "./UI/DetailsCard";
import { skillDetails } from "../Constants/skillsDetails";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 661 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 661, min: 0 },
    items: 1,
  },
};

const skillCardBrkPoint = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1300},
    items: 6,
  },
  desktop2: {
    breakpoint: { max: 1300, min: 1080},
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1080, min: 861 },
    items: 4,
  },
  tablet2:{
    breakpoint:{ max: 861, min: 661 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 661, min: 0 },
    items: 2,
  },
}

const Skills = () => {
  const [isDesktop,setIsDesktop] = useState(window.innerWidth>1030)
  return (
    <div id="skills">
      <h1 className="skillheader">Skills</h1>
      <Carousel responsive={responsive} showDots={isDesktop?false:true} arrows={false} autoPlay={true}>
        {skillDetails.map((item)=><DetailsCard title={item.title} icon={item.icon} key={item.id} content={item.content}/>)}
      </Carousel>
      <div className="skillContainer">
      <Carousel responsive={skillCardBrkPoint} showDots={false} arrows={true} infinite={true} autoPlay={true} autoPlaySpeed={1000}>

        <SkillCard title={"Node js"} icon={icons.nodeJs} />
        <SkillCard title={"React js"} icon={icons.react} />
        <SkillCard title={"ReactNative"} icon={icons.react} />
        <SkillCard title={"Expo"} icon={icons.expo} />
        <SkillCard title={"Mongo Db"} icon={icons.mongo} />
        <SkillCard title={"Express Js"} icon={icons.express} />
        <SkillCard title={"Next Js"} icon={icons.next} />
        <SkillCard title={"Redux"} icon={icons.redux} />
        <SkillCard title={"Docker"} icon={icons.docker} />
        <SkillCard title={"Tailwind"} icon={icons.tailwind} />
      </Carousel>
      </div>
    </div>
  );
};

export default Skills;

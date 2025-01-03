import React from "react";
import "./ProjectTechChip.css";
import "../../scrollAnimate.css";
import { useInView } from "react-intersection-observer";

const ProjectTechChip = ({ img, text,index }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    initialInView: false,
  });
  return (
    <div className={`chip ${inView?'show':'hidden'}`} ref={ref} style={{transitionDelay:`${50*index}ms`}}>
        <img src={img} alt={`${text}-icon`}/>
        <p>{text || "React"}</p>
    </div>
  )
}

export default ProjectTechChip;

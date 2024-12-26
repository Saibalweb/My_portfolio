import React from 'react';
import './ProjectCard.css';
import projectDemo from '../../assets/project_demo.jpg'
import ProjectTechChip from './ProjectTechChip';

const ProjectCard = ({id,name,subHeading,image,link,description,techStack}) => {
  return (
      <div className='projectCard'>
        <a href={link} target='_blank'>
            <img src={projectDemo} className='projectDemoImg'/>
        </a>
        <div className='projectDetails'>
            <h3>{name}</h3>
            <h4>{subHeading || "An app for creating prescription for doctors"}</h4>
            <div className='projectDes'>
                <p>{description}</p>
                <a href={link} target="_blank">Github</a>
            </div>
            <div className='chipContainer'>
                {techStack.map((item,index)=><ProjectTechChip text={item.name} img={item.icon} key={index}/>)}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
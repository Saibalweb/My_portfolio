import React from 'react';
import './ProjectCard.css';
import ProjectTechChip from './ProjectTechChip';
import icons from '../../assets/icons';
import GithubBtn from './GithubBtn';

const ProjectCard = ({id,name,subHeading,image,link,description,techStack}) => {
  return (
      <div className='projectCard'>
        <a href={link} target='_blank'>
            <img src={image} className='projectDemoImg' alt={`${name}-cover`} loading='lazy'/>
        </a>
        <div className='projectDetails'>
            <h3>{name}</h3>
            <h4>{subHeading || "An app for creating prescription for doctors"}</h4>
            <div className='projectDes'>
                <p>{description}</p>
                <div className='githubBtnContainer'>
                    {link.map((item,index)=><GithubBtn key={index} text={item.name} link={item.link}/>)}
                </div>
            </div>
            <div className='chipContainer'>
                {techStack.map((item,index)=><ProjectTechChip text={item.name} img={item.icon} key={index}/>)}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
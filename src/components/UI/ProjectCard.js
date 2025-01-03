import React from 'react';
import './ProjectCard.css';
import ProjectTechChip from './ProjectTechChip';
import icons from '../../assets/icons';
import GithubBtn from './GithubBtn';
import '../../scrollAnimate.css';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({id,name,subHeading,image,link,description,techStack}) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce:false,
        initialInView:false,
      });
  return (
      <div className={`projectCard ${inView?'show':'hidden'}`} ref={ref}>
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
                {techStack.map((item,index)=><ProjectTechChip text={item.name} img={item.icon} key={index} index={index}/>)}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
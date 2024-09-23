import React from 'react';
import './ProjectCard.css';
import projectDemo from '../../assets/project_demo.jpg'
import ProjectTechChip from './ProjectTechChip';

const ProjectCard = () => {
  return (
    <div className='projectCard'>
        <div>
            <img src={projectDemo} className='projectDemoImg'/>
        </div>
        <div className='projectDetails'>
            <h3>DocRx</h3>
            <h4>An app for creating prescription for doctors</h4>
            <div className='projectDes'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perferendis. Pariatur, laboriosam magni. Architecto harum aspernatur reiciendis distinctio et repudiandae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perferendis. Pariatur, laboriosam magni. Architecto harum aspernatur reiciendis distinctio et repudiandae.</p>
                <a href="">Show More...</a>
            </div>
            <div className='chipContainer'>
                <ProjectTechChip/>
                <ProjectTechChip/>
                <ProjectTechChip/>
                <ProjectTechChip/>
                <ProjectTechChip/>
                <ProjectTechChip/>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
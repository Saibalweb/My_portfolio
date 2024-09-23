import React from 'react';
import './ProjectTechChip.css';
import icons from '../../assets/icons';

const ProjectTechChip = () => {
  return (
    <div className='chip'>
        <img src={icons.mongo}/>
        <p>React</p>
    </div>
  )
}

export default ProjectTechChip;
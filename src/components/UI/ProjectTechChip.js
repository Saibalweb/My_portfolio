import React from 'react';
import './ProjectTechChip.css';
import icons from '../../assets/icons';

const ProjectTechChip = ({img,text}) => {
  return (
    <div className='chip'>
        <img src={img}/>
        <p>{text || "React"}</p>
    </div>
  )
}

export default ProjectTechChip;
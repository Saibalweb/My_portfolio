import React from 'react';
import './ProjectTechChip.css';

const ProjectTechChip = ({img,text}) => {
  return (
    <div className='chip'>
        <img src={img} alt={`${text}-icon`}/>
        <p>{text || "React"}</p>
    </div>
  )
}

export default ProjectTechChip;
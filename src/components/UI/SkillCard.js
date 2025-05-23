import React from 'react';
import "./SkillCard.css";

const SkillCard = ({title,icon}) => {
  return (
    <div className='skillCard'>
       <img src={icon} className='skillImg' alt={title}/>
       <p className='skillTitle'>{title}</p>
    </div>
  )
}

export default SkillCard;

import React from 'react';
import "./SkillCard.css";
import icons from '../../assets/icons';

const SkillCard = ({title,icon}) => {
  return (
    <div className='skillCard'>
       <img src={icon} className='skillImg'/>
       <p className='skillTitle'>{title}</p>
    </div>
  )
}

export default SkillCard;

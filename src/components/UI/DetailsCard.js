import React from 'react'
import icons from '../../assets/icons';
import "./DetailsCard.css"

const DetailsCard = ({style,title,content,icon}) => {
  return (
    <div className='detalsCard' style={{marginRight:20}}>
      <img src={icon} alt="Front End Icon" className='detailsIcon' />
      <h2 className='detailsTitle'>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default DetailsCard;

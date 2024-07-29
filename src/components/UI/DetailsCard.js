import React from 'react'
import icons from '../../assets/icons';
import "./DetailsCard.css"

const DetailsCard = ({style}) => {
  return (
    <div className='detalsCard' style={{marginRight:20}}>
      <img src={icons.backEnd} alt="Front End Icon" className='detailsIcon' />
      <h2 className='detailsTitle'>FrontEnd Developement</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio sapiente unde expedita! Officia, inventore officiis? Provident velit illo consectetur officia.</p>
    </div>
  )
}

export default DetailsCard;

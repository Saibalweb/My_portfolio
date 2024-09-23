import React from 'react';
import styles from './Btn.module.css';

const Btn = ({text,color,onClick}) => {
    console.log(text);
  return (
    <button type='button' className={styles.Btn} onClick={onClick}>{text}</button>
  )
}

export default Btn;

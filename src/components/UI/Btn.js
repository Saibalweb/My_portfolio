import React from 'react';
import styles from './Btn.module.css';

const Btn = ({text,color}) => {
    console.log(text);
  return (
    <button type='button' className={styles.Btn}>{text}</button>
  )
}

export default Btn;

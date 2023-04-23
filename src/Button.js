import React from 'react';
import styles from './Button.module.scss';
import arrow from './icon-arrow.svg';

const Button = ({onClick}) => {
  return (
    <div className={styles.button}>
        <div className={styles.button__line}></div>
        <button type='submit' className={styles.button__body} onClick={onClick}>
            <img src={arrow} alt="arrow" />
        </button>
    </div>
  )
}

export default Button
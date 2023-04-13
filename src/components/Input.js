import React from 'react';
import styles from './Input.module.scss';

const Input = () => {
  return (
    <li className={styles.input}>
      <label className={styles.input__label}>
        <div>day</div>
        <input type="text" placeholder='DD' className={styles.input__body}/>
      </label>
    </li>
  )
}

export default Input
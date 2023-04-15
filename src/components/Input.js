import React from 'react';
import styles from './Input.module.scss';

const Input = ({title, placeholder}) => {
  return (
    <label className={styles.input}>
      <div className={styles.input__label}>{title}</div>
      <input placeholder={placeholder} className={styles.input__body} />
    </label>
  )
}

export default Input
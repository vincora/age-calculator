import React from 'react';
import styles from './Input.module.scss';

const Input = ({label, name, placeholder, onChange}) => {

  return (
    <label className={styles.input}>
      <div className={styles.input__label}>{label}</div>
      <input 
        type='text' 
        placeholder={placeholder} 
        className={styles.input__body} 
        onChange={onChange}
      />
    </label>
  )

}

export default Input
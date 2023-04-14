import React from 'react';
import styles from './Result.module.scss';

const Result = ({years, months, days, ready}) => {
  return (
    <ul className={styles.result}>
        <li className={styles.result__item}>
          <div className={styles.result__amount}>{ready ? years : '- -'}</div>
          <div className={styles.result__category}>years</div>
        </li>
        <li className={styles.result__item}>
          <div className={styles.result__amount}>{ready ? months : '- -'}</div>
          <div className={styles.result__category}>months</div>
        </li>
        <li className={styles.result__item}>
          <div className={styles.result__amount}>{ready ? days : '- -'}</div>
          <div className={styles.result__category}>days</div>
        </li>
    </ul>
  )
}

export default Result
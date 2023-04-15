import React from 'react';
import styles from './Result.module.scss';

const Result = ({result}) => {

  const ready = result !== undefined;

  return (
    <ul className={styles.result}>
        <li className={styles.result__item}>
          <div className={styles.result__amount}>{ready ?  result.years : '- -'}</div>
          <div className={styles.result__category}>years</div>
        </li>
        <li className={styles.result__item}>
          <div className={styles.result__amount}>{ready ? result.months : '- -'}</div>
          <div className={styles.result__category}>months</div>
        </li>
        <li className={styles.result__item}>
          <div className={styles.result__amount}>{ready ? Math.floor(result.days) : '- -'}</div>
          <div className={styles.result__category}>days</div>
        </li>
    </ul>
  )
}

export default Result
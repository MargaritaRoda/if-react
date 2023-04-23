import React from 'react';
import styles from './AdultsFormCounter.module.scss';

export const AdultsFormCounter = ({ name, value, onChange, maxValue }) => {
  const handleMinusClick = (e) => {
    e.preventDefault();
    onChange(value - 1);
  };
  const handlePlusClick = (e) => {
    e.preventDefault();
    onChange(value + 1);
  };
  return (
    <div className={styles.root}>
      <div className={styles.header}>{name}</div>
      <div className={styles.main}>
        <button
          disabled={value > 0}
          className={styles.btn}
          onClick={handleMinusClick}
        >
          -
        </button>
        <div>{value}</div>
        <button
          disabled={value === maxValue}
          className={styles.btn}
          onClick={handlePlusClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

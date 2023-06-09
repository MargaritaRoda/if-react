import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from './AdultsFormCounter.module.scss';

export const AdultsFormCounter = ({
  name,
  value,
  onChange,
  maxValue,
  minValue,
}) => {
  const handleMinusClick = useCallback(
    (e) => {
      e.preventDefault();
      onChange(value - 1);
    },
    [onChange, value],
  );
  const handlePlusClick = useCallback(
    (e) => {
      e.preventDefault();
      onChange(value + 1);
    },
    [onChange, value],
  );

  return (
    <div className={styles.root}>
      <div className={styles.header}>{name}</div>
      <div className={styles.main}>
        <button
          disabled={value === minValue}
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

AdultsFormCounter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
};

import React, { useMemo } from 'react';
import styles from './ChildrenAgePanel.module.scss';

export const SelectAges = ({ value, onChange }) => {
  const options = useMemo(() => {
    const opts = [];
    for (let i = 0; i <= 17; i++) {
      opts.push({
        value: i,
        label: `${i} years old`,
      });
    }
    return opts;
  }, []);

  return (
    <select className={styles.childAge} value={value} onChange={onChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

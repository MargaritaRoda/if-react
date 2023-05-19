import React, { useEffect } from 'react';

import { SelectAges } from './SelectAges';
import { useTopSectionFormContext } from '../../contexts/TopSectionForm.context';

import styles from './ChildrenAgePanel.module.scss';

export const ChildrenAgePanel = ({ value }) => {
  const { childrenAges, setChildrenAges } = useTopSectionFormContext();

  useEffect(() => {
    if (value > childrenAges.length) {
      setChildrenAges((prevChildrenAges) => {
        const newChildrenAges = [...prevChildrenAges];

        for (let i = newChildrenAges.length; i < value; i += 1) {
          newChildrenAges.push(0);
        }
        return newChildrenAges;
      });
    } else if (value < childrenAges.length) {
      setChildrenAges((prevChildrenAges) => {
        const newChildrenAges = [...prevChildrenAges];
        newChildrenAges.splice(value);
        return newChildrenAges;
      });
    }
  }, [childrenAges, setChildrenAges, value]);
  const handleChangeChildrenAges = (index, e) => {
    setChildrenAges((prevChildrenAges) => {
      const childrenAges = [...prevChildrenAges];
      childrenAges[index] = e.target.value;
      return childrenAges;
    });
  };
  return (
    <div hidden={value === 0}>
      <p className={styles.childrenAgeInfo}>
        What is the age of the child you’re travelling with?
      </p>
      <div className={styles.childrenContainer}>
        {[...Array(value)].map((item, index) => {
          return (
            <SelectAges
              key={index}
              value={childrenAges[index]}
              onChange={handleChangeChildrenAges.bind(null, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

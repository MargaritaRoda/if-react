import React from 'react';
import PropTypes from 'prop-types';

import { SelectAges } from './SelectAges';

import styles from './ChildrenAgePanel.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectChildrenAges } from '../../store/selectors/topSectionForm.selectors';
import { setChildrenAge } from '../../store/actions/topSectionForm.actions';

export const ChildrenAgePanel = ({ value }) => {
  const childrenAges = useSelector(selectChildrenAges);
  const dispatch = useDispatch();

  const handleChangeChildrenAges = (index, e) => {
    dispatch(setChildrenAge({ index, value: parseInt(e.target.value, 10) }));
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

ChildrenAgePanel.propTypes = {
  value: PropTypes.number.isRequired,
};

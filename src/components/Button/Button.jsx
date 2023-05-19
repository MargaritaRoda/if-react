import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const Button = ({ children, type }) => {
  return (
    <button className={styles.btn} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './Button.module.scss';
export const Button = ({ children, type, className }) => {
  return (
    <button className={classNames(styles.btn, className)} type={type}>
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

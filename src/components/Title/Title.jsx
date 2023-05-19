import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Title.module.scss';

export const Title = ({ className, children }) => {
  return <h2 className={classNames(styles.title, className)}>{children}</h2>;
};

Title.propTypes = {
  className: PropTypes.string,
};

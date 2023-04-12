import React from 'react';
import classNames from 'classnames';
import styles from './Title.module.scss';

export const Title = ({ className, children }) => {
  return <h2 className={classNames(styles.title, className)}>{children}</h2>;
};

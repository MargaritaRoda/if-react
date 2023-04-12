import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames';

export const Container = ({ className, children }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};

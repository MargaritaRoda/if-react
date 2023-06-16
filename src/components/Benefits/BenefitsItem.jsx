import React from 'react';
import styles from './Benefits.module.scss';
import { Icon } from '../../icons/Icon';
import classNames from 'classnames';

export const BenefitsItem = ({ text, name, className }) => {
  return (
    <div className={styles.item}>
      <Icon name={name} className={classNames(className)} />
      <p>{text}</p>
    </div>
  );
};

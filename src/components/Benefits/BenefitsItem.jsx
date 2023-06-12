import React from 'react';
import { Icon } from '../../icons/Icon';
import classNames from 'classnames';
import { useStyles } from './BenefitsItem.styles';

export const BenefitsItem = ({ text, name, className }) => {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <Icon name={name} className={classNames(className)} />
      <p>{text}</p>
    </div>
  );
};

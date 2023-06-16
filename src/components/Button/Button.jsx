import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { useStyles } from './Button.styles';

export const Button = ({ children, type, className }) => {
  const classes = useStyles();

  return (
    <button className={classNames(classes.root, className)} type={type}>
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

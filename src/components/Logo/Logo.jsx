import React from 'react';
import PropTypes from 'prop-types';

export const Logo = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Logo.propTypes = {
  className: PropTypes.string,
};

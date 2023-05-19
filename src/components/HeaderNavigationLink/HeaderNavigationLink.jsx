import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './HeaderNavigationLink.module.scss';

export const HeaderNavigationLink = ({ children, href }) => {
  return (
    <div
      className={classNames(
        styles.headerNavItem,
        styles.headerNavItemLink,
        styles.headerNavItemMobile,
      )}
    >
      <a href={href}>{children}</a>
    </div>
  );
};

HeaderNavigationLink.propTypes = {
  href: PropTypes.string.isRequired,
};

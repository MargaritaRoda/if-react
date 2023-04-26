import React from 'react';

import styles from './HeaderNavigationLink.module.scss';
import classNames from 'classnames';

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

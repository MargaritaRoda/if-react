import React from 'react';

import styles from './HeaderNavIcon.module.scss';

export const HeaderNavIcon = ({ children }) => {
  return <div className={styles.headerNavItem}>{children}</div>;
};

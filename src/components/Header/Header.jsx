import React from 'react';
import { Logo } from '../Logo';
import { HeaderNavigation } from '../HeaderNavigation';
import { Icon } from '../../icons/Icon';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo>
        <Icon className={styles.logoIcon} name="logo" />
      </Logo>
      <HeaderNavigation />
    </header>
  );
};

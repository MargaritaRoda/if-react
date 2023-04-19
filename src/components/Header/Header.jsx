import React from 'react';
import { Logo } from '../Logo';
import { HeaderNavigation } from '../HeaderNavigation';

import styles from './Header.module.scss';
import { LogoIcon } from '../../icons/LogoIcon';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo>
        <LogoIcon className={styles.logoIcon} />
      </Logo>
      <HeaderNavigation />
    </header>
  );
};

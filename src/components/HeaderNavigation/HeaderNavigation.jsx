import React from 'react';

import { HeaderNavigationLink } from '../HeaderNavigationLink';
import { HeaderNavIcon } from '../HeaderNavIcon';
import { Night } from '../../icons/Night';
import { Account } from '../../icons/Account';
import { Menu } from '../../icons/Menu';

import styles from './HeaderNavigation.module.scss';

export const HeaderNavigation = () => {
  return (
    <nav className={styles.headerNav}>
      <HeaderNavigationLink href="#">Stays</HeaderNavigationLink>
      <HeaderNavigationLink href="#">Attractions</HeaderNavigationLink>

      <HeaderNavIcon>
        <Night className={styles.headerNavItemIconNight} />
      </HeaderNavIcon>

      <HeaderNavIcon>
        <Account className={styles.headerNavItemIconAcc} />
      </HeaderNavIcon>

      <HeaderNavIcon>
        <Menu className={styles.headerNavItemIconMobileMenu} />
      </HeaderNavIcon>
    </nav>
  );
};

import React from 'react';

import { HeaderNavigationLink } from '../HeaderNavigationLink';
import { HeaderNavIcon } from '../HeaderNavIcon';
import { Icon } from '../../icons/Icon';

import styles from './HeaderNavigation.module.scss';

export const HeaderNavigation = () => {
  return (
    <nav className={styles.headerNav}>
      <HeaderNavigationLink href="#">Stays</HeaderNavigationLink>
      <HeaderNavigationLink href="#">Attractions</HeaderNavigationLink>

      <HeaderNavIcon>
        <Icon className={styles.headerNavItemIconNight} name="night" />
      </HeaderNavIcon>

      <HeaderNavIcon>
        <Icon className={styles.headerNavItemIconAcc} name="account" />
      </HeaderNavIcon>

      <HeaderNavIcon>
        <Icon
          className={styles.headerNavItemIconMobileMenu}
          name="mobile-menu"
        />
      </HeaderNavIcon>
    </nav>
  );
};

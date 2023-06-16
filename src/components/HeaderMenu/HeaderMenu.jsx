import React from 'react';
import { Logo } from '../Logo';
import { HeaderNavigation } from '../HeaderNavigation';
import { Icon } from '../../icons/Icon';

import styles from './HeaderMenu.module.scss';

export const HeaderMenu = () => {
  return (
    <menu className={styles.root}>
      <Logo>
        <Icon className={styles.logoIcon} name="logo" />
      </Logo>
      <HeaderNavigation />
    </menu>
  );
};

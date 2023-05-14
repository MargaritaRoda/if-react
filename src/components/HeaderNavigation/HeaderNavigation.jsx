import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { HeaderNavigationLink } from '../HeaderNavigationLink';
import { HeaderNavIcon } from '../HeaderNavIcon';
import { Icon } from '../../icons/Icon';
import { DropdownButton } from '../DropdownButton';

import { useRegistrationWindowContext } from '../../contexts/RegistrationWindow.context';

import styles from './HeaderNavigation.module.scss';

export const HeaderNavigation = () => {
  const [visibleSignOut, setVisibleSignOut] = useState(false);
  const { email } = useRegistrationWindowContext();

  const handleChangeVisibleSignOut = (event) => {
    if (email) {
      setVisibleSignOut((prevState) => !prevState);
    }
  };

  return (
    <nav className={styles.headerNav}>
      <HeaderNavigationLink href="#">Stays</HeaderNavigationLink>
      <HeaderNavigationLink href="#">Attractions</HeaderNavigationLink>

      <HeaderNavIcon>
        <Icon className={styles.headerNavItemIconNight} name="night" />
      </HeaderNavIcon>

      <HeaderNavIcon>
        <Icon
          className={classNames(styles.headerNavItemIconAcc)}
          name="account"
          onClick={handleChangeVisibleSignOut}
        />
      </HeaderNavIcon>

      {createPortal(<DropdownButton visible={visibleSignOut} />, document.body)}

      <HeaderNavIcon>
        <Icon
          className={styles.headerNavItemIconMobileMenu}
          name="mobile-menu"
        />
      </HeaderNavIcon>
    </nav>
  );
};

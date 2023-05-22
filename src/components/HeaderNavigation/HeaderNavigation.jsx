import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { HeaderNavigationLink } from '../HeaderNavigationLink';
import { HeaderNavIcon } from '../HeaderNavIcon';
import { Icon } from '../../icons/Icon';
import { DropdownButton } from '../DropdownButton';

import { selectIsUserAuthorized } from '../../store/selectors/user.selectors';

import styles from './HeaderNavigation.module.scss';

export const HeaderNavigation = () => {
  const [visibleSignOut, setVisibleSignOut] = useState(false);
  const isUserAuthorized = useSelector(selectIsUserAuthorized);

  const handleChangeVisibleSignOut = (event) => {
    if (isUserAuthorized) {
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

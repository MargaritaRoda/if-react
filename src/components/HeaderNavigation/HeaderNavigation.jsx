import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { HeaderNavigationLink } from '../HeaderNavigationLink';
import { HeaderNavIcon } from '../HeaderNavIcon';
import { Icon } from '../../icons/Icon';
import { DropdownButton } from '../DropdownButton';

import { selectIsUserAuthorized } from '../../store/selectors/user.selectors';

import styles from './HeaderNavigation.module.scss';
import { toggleTheme } from '../../store/slicers/theme.slicer';

export const HeaderNavigation = () => {
  const [visibleSignOut, setVisibleSignOut] = useState(false);
  const isUserAuthorized = useSelector(selectIsUserAuthorized);
  const dispatch = useDispatch();

  const handleChangeTheme = useCallback(() => {
    const action = toggleTheme();
    dispatch(action);
  }, [dispatch]);

  const handleChangeVisibleSignOut = () => {
    if (isUserAuthorized) {
      setVisibleSignOut((prevState) => !prevState);
    }
  };

  return (
    <nav className={styles.headerNav}>
      <HeaderNavigationLink href="#">Stays</HeaderNavigationLink>
      <HeaderNavigationLink href="#">Attractions</HeaderNavigationLink>

      <HeaderNavIcon>
        <Icon
          className={styles.headerNavItemIconNight}
          name="night"
          onClick={handleChangeTheme}
        />
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

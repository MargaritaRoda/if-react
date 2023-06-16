import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { logout } from '../../store/slicers/user.slicer';

import styles from './DropdownButton.module.scss';
export const DropdownButton = ({ visible }) => {
  const dispatch = useDispatch();

  const handleChangeSignOut = (event) => {
    dispatch(logout());
  };

  return (
    <button
      className={classNames(styles.root, !visible && styles.root_hidden)}
      type="button"
      onClick={handleChangeSignOut}
    >
      Sing out
    </button>
  );
};

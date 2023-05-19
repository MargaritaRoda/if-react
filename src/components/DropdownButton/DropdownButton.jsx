import React from 'react';

import classNames from 'classnames';
import { useRegistrationWindowContext } from '../../contexts/RegistrationWindow.context';

import styles from './DropdownButton.module.scss';
export const DropdownButton = ({ visible }) => {
  const { setUser } = useRegistrationWindowContext();
  const handleChangeSignOut = (event) => {
    setUser({ email: '', password: '' });
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

import React from 'react';

import classNames from 'classnames';
import { useRegistrationWindowContext } from '../../contexts/RegistrationWindow.context';

import styles from './DropdownButton.module.scss';
export const DropdownButton = ({ visible }) => {
  const { setEmail, setPassword } = useRegistrationWindowContext();
  const handleChangeSignOut = (event) => {
    setEmail(() => '');
    setPassword(() => '');
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

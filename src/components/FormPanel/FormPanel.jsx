import React from 'react';
import classNames from 'classnames';
import styles from './FormPanel.module.scss';

export const FormPanel = ({ children, visible = false, className }) => {
  return (
    <div
      className={classNames(
        styles.formPanel,
        !visible && styles.formPanel_hidden,
        className,
      )}
    >
      {children}
    </div>
  );
};

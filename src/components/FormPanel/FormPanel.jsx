import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './FormPanel.module.scss';

export const FormPanel = ({ children, visible, className, align }) => {
  return (
    <div
      className={classNames(
        styles.formPanel,
        !visible && styles.formPanel_hidden,
        className,
        {
          [styles.left]: align === 'left',
          [styles.right]: align === 'right',
        },
      )}
    >
      {children}
    </div>
  );
};

FormPanel.defaultProps = {
  align: 'right',
  visible: false,
};

FormPanel.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
};

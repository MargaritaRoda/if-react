import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './TopSectionFormInput.module.scss';

export const TopSectionFormInput = memo(
  ({
    id,
    name,
    placeholder,
    className,
    inputClassName,
    labelClassName,
    label,
    type,
    value,
    readOnly,
    inputWrapperClassName,
    onClick,
    children,
  }) => {
    return (
      <div className={classNames(styles.formRow, className)}>
        <label
          htmlFor={id}
          className={classNames(styles.formLabel, labelClassName)}
        >
          {label}
        </label>
        <div className={classNames(styles.inputWrapper, inputWrapperClassName)}>
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            required
            readOnly={readOnly}
            className={classNames(
              styles.input,
              styles.inputLabeled,
              inputClassName,
            )}
            onClick={onClick}
          />
          {children}
        </div>
      </div>
    );
  },
);

TopSectionFormInput.defaultProps = {
  type: 'text',
  readOnly: false,
};

TopSectionFormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  inputWrapperClassName: PropTypes.string,
  onClick: PropTypes.func,
};

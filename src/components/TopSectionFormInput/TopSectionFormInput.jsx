import React from 'react';
import classNames from 'classnames';
import styles from './TopSectionFormInput.module.scss';

export const TopSectionFormInput = ({
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
};

TopSectionFormInput.defaultProps = {
  type: 'text',
  readOnly: false,
};

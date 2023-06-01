import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Form, useNavigate } from 'react-router-dom';

import styles from './RegistrationWindow.module.scss';
import { login } from '../../store/slicers/user.slicer';
const RegistrationWindow = ({ emailId, passwordId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistration = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData.entries());

    const { email, password } = data;
    dispatch(login({ email, password }));
    navigate('/');
  };

  return (
    <Form
      action="/"
      method="get"
      onSubmit={handleRegistration}
      className={classNames(styles.root)}
    >
      <div className={styles.title}>Sign in</div>
      <div className={styles.form}>
        <label className={styles.label} htmlFor={emailId}>
          Email address
        </label>
        <input
          className={styles.textField}
          id={emailId}
          name="email"
          type="email"
          required
        />
        <label className={styles.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          className={styles.textField}
          id={passwordId}
          name="password"
          type="password"
          required
        />
        <Button className={styles.btn} type="submit">
          Sign in
        </Button>
      </div>
    </Form>
  );
};

RegistrationWindow.defaultProps = {
  align: 'right',
};

RegistrationWindow.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(['right', 'left']).isRequired,
};

export default RegistrationWindow;

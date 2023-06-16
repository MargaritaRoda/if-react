import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Form, useNavigate } from 'react-router-dom';
import { login } from '../../store/slicers/user.slicer';
import { useStyles } from './RegistrationWindow.styles';

const RegistrationWindow = ({ emailId, passwordId }) => {
  const classes = useStyles();

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
      className={classNames(classes.root)}
    >
      <div className={classes.title}>Sign in</div>
      <div className={classes.form}>
        <label className={classes.label} htmlFor={emailId}>
          Email address
        </label>
        <input
          className={classes.textField}
          id={emailId}
          name="email"
          type="email"
          required
        />
        <label className={classes.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          className={classes.textField}
          id={passwordId}
          name="password"
          type="password"
          required
        />
        <Button className={classes.btn} type="submit">
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

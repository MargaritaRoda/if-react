import React from 'react';
import styles from './RegistrationSection.module.scss';
import { Container } from '../components/Container';
import { Icon } from '../icons/Icon';

export const RegistrationSection = () => {
  return (
    <Container className={styles.registrationContainer}>
      <div className={styles.registrationWrapperDesktop}>
        <h3 className={styles.registrationTitle}>
          Sign up and get 20% off your first booking
        </h3>
        <button className={styles.registrationButton}>Sign up</button>
      </div>

      <div className={styles.registrationIcon}>
        <Icon className={styles.registrationIconImg} name="registration_logo" />
      </div>

      <Icon className={styles.registrationCloseWnd} name="close-wnd" />

      <div className={styles.registrationLogo}>
        <Icon className={styles.registrationLogoIcon} name="logo" />
      </div>
      <h5 className={styles.registrationTitleMobile}>
        Sign up in the app and get 20% off your first booking
      </h5>
      <h5 className={styles.registrationInstall}>Install</h5>
    </Container>
  );
};

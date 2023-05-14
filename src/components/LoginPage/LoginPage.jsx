import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Container } from '../Container';
import { RegistrationWindow } from '../RegistrationWindow';

import styles from './LoginPage.module.scss';
export const LoginPage = () => {
  return (
    <>
      <div className={styles.topSection}>
        <Container>
          <Header />
          <RegistrationWindow />
        </Container>
      </div>
      <Footer />
    </>
  );
};

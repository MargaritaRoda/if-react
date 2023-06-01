import React, { Suspense } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Container } from '../Container';
import { RegistrationWindow } from '../RegistrationWindow';

import styles from './LoginPage.module.scss';
import { useRedirectAuthorized } from '../../hooks/useRedirectUnauthorized';
export const LoginPage = () => {
  useRedirectAuthorized();

  return (
    <>
      <div className={styles.topSection}>
        <Container>
          <Header />
          <Suspense>
            <RegistrationWindow />
          </Suspense>
        </Container>
      </div>
      <Footer />
    </>
  );
};

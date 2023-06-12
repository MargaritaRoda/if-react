import React, { Suspense } from 'react';
import { RegistrationWindow } from '../../components/RegistrationWindow';
import { useRedirectAuthorized } from '../../hooks/useRedirectUnauthorized';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const LoginPage = () => {
  useRedirectAuthorized();

  return (
    <>
      <Header>
        <Suspense>
          <RegistrationWindow />
        </Suspense>
      </Header>
      <Footer />
    </>
  );
};

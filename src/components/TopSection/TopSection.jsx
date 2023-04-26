import React from 'react';

import { Container } from '../Container';
import { Header } from '../Header';
import { TopSectionFormContextProvider } from '../../contexts/TopSectionForm.context';
import { TopSectionForm } from '../TopSectionForm';
import { GoogleIcon } from '../../icons/GoogleIcon/GoogleIcon';
import { Icon } from '../../icons/Icon';

import styles from './TopSection.module.scss';

export const TopSection = () => {
  return (
    <main className={styles.topSection}>
      <Container>
        <Header />
        <div className={styles.topSectionBody}>
          <h1 className={styles.topSectionTitle}>
            Discover stays
            <br />
            to live, work or just relax
          </h1>

          <TopSectionFormContextProvider>
            <TopSectionForm />
          </TopSectionFormContextProvider>
        </div>
        <div className={styles.topSectionsIcons}>
          <div className={styles.topSectionGoogle}>
            <GoogleIcon className={styles.topSectionGoogle} />
          </div>
          <div>
            <Icon className={styles.apple} name="apple" />
          </div>
        </div>
      </Container>
    </main>
  );
};

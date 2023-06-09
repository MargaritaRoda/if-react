import React from 'react';
import { TopSectionForm } from '../TopSectionForm';
import { GoogleIcon } from '../../icons/GoogleIcon/GoogleIcon';
import { Icon } from '../../icons/Icon';

import styles from './TopSection.module.scss';

export const TopSection = () => {
  return (
    <>
      <div className={styles.topSectionBody}>
        <h1 className={styles.topSectionTitle}>
          Discover stays
          <br />
          to live, work or just relax
        </h1>
        <TopSectionForm />
      </div>
      <div className={styles.topSectionsIcons}>
        <div className={styles.topSectionGoogle}>
          <GoogleIcon className={styles.topSectionGoogle} />
        </div>
        <div>
          <Icon className={styles.apple} name="apple" />
        </div>
      </div>
    </>
  );
};

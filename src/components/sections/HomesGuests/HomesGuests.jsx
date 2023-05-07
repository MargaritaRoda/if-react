import React from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';
import { getPopularHotelsData } from '../../../services/hotelsData';

import styles from './HomesGuests.module.scss';

export const HomesGuests = () => {
  const itemsPromise = getPopularHotelsData();

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Title className={styles.title}>Homes guests loves</Title>
        <HotelsList itemsPromise={itemsPromise} />
      </Container>
    </section>
  );
};

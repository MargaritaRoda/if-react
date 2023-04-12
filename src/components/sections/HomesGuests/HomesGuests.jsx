import React from 'react';
import styles from './HomesGuests.module.scss';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';

import { HOTELS_DATA } from '../../../data';

export const HomesGuests = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Title className={styles.title}>Homes guests loves</Title>
        <HotelsList items={HOTELS_DATA} />
      </Container>
    </section>
  );
};

import React from 'react';
import styles from './AvailableHotels.module.scss';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';

export const AvailableHotels = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Title className={styles.title}>Available hotels</Title>
        <HotelsList items={items} />
      </Container>
    </section>
  );
};

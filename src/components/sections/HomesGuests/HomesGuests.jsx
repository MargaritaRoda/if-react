import React from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';

import styles from './HomesGuests.module.scss';
import { useGetHotelsPopularQuery } from '../../../store/slicers/apiSlice';

export const HomesGuests = () => {
  const { data: items, isLoading } = useGetHotelsPopularQuery();

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Title className={styles.title}>Homes guests loves</Title>
        <HotelsList items={items} isLoading={isLoading} />
      </Container>
    </section>
  );
};

import React, { useEffect, useState } from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';
import { getPopularHotelsData } from '../../../services/hotelsData';

import styles from './HomesGuests.module.scss';

export const HomesGuests = () => {
  const [hotelsData, setHotelsData] = useState([]);

  useEffect(() => {
    getPopularHotelsData().then((hotels) => {
      setHotelsData(hotels);
    });
  }, [setHotelsData]);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Title className={styles.title}>Homes guests loves</Title>
        <HotelsList items={hotelsData} />
      </Container>
    </section>
  );
};

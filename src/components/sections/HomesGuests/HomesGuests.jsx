import React, { useCallback, useEffect, useState } from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';
import { getPopularHotelsData } from '../../../services/hotelsData';

import styles from './HomesGuests.module.scss';

export const HomesGuests = () => {
  const [hotelsData, setHotelsData] = useState([]);

  const getData = useCallback(async () => {
    const data = await getPopularHotelsData();
    setHotelsData(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Title className={styles.title}>Homes guests loves</Title>
        <HotelsList items={hotelsData} />
      </Container>
    </section>
  );
};
